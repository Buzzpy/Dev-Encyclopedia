import { generateUniqueId } from '../utils/utilities.js';
import { StateRadio } from './state-radio/lib/state-radio.js';

// state management
const { channels } = StateRadio();

export const radio = channels;

/**
 * Subscribes a function or rather say runs an effect when the state of one or more dependent state channels changes.
 * @param {Function} newFn - The function to be called when the dependent state changes.
 * @param {Array} dependentStateChannels - An array of state channels that the function depends on. If this array is empty, the function will be called when the DOM content is loaded, once and only once for all component lifetime.
 */
export function useEffect(newFn, dependentStateChannels) {
  if (dependentStateChannels.length === 0) {
    window.addEventListener('DOMContentLoaded', newFn());
    return;
  }
  dependentStateChannels.forEach((channel) => {
    let targetChannel = radio.getChannel(channel.id);
    if (!targetChannel) {
      console.error('channel not found', channel);
      return;
    }
    targetChannel.subscribe(newFn);
  });
}

/**
 * Creates a new state with a unique ID and a channel for managing its value.
 * @param {*} initialState - The initial value of the state.
 * @returns {Array} An array containing the state object, setState function, and the channel.
 */
export function useState(initialState) {
  let newStateId = generateUniqueId('state', 12);

  let channel = channels.addChannel(newStateId, initialState);

  const state = {
    id: newStateId,
    current: () => channel.getState(),
    subscribe: (fn) => channel.subscribe(fn),
    value: channel.getState(),
  };
  // enable passing component level state to state setter
  const setState = (newValue) => {
    if (typeof newValue === 'object' && newValue.hasOwnProperty('value')) {
      console.log('object passed');
      return channel.setState(newValue.current());
    }
    return channel.setState(newValue);
  };

  return [state, setState, channel];
}

/**
 * Creates a new store with a unique ID and methods for managing its state.
 * @param {*} initialState - The initial state of the store.
 * @returns {Object} An object with methods to interact with the store.
 */
export function createStore(initialState) {
  let newStateId = generateUniqueId('store', 12);

  let channel = channels.addChannel(newStateId, initialState);

  return {
    id: newStateId,
    setValue: channel.setState,
    getValue: () => channel.getState(),
    subscribe: (fn) => channel.subscribe(fn),
    channel: channel,
  };
}

/**
 * Creates a state object and setState function from an existing store.
 * @param {Object} store - The store object created by createStore.
 * @returns {Array} An array containing the state object that has same shape as that of useState, then setState function, and the store's channel.
 */
export function useStore(store) {
  const state = {
    id: store.id,
    current: () => store.getValue(),
    subscribe: (fn) => store.subscribe(fn),
    value: store.getValue(),
  };

  // enable passing component level state to state setter
  const setState = (newValue) => {
    if (typeof newValue === 'object' && newValue.hasOwnProperty('value')) {
      return store.setValue(newValue.current());
    }
    return store.setValue(newValue);
  };

  return [state, setState, store.channel];
}
