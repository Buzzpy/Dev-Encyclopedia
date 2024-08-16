import { generateUniqueId } from '../../utils/utilities.js';

const __signals = [];

export function useSignal(value) {
  let newSignalId = generateUniqueId(signal, 12);

  if (value) {
    __signals.push({
      id: newSignalId,
      value: value,
      subscribers: new Set(),
    });
  } else {
    console.warn('signal must have a default value!');
  }

  return {
    get value() {
      if (subscriber) {
        subscribers.add(subscriber);
      }
      return value;
    },
    set value(updatedValue) {
      value = updatedValue;
      for (const subscriber of subscribers) {
        subscriber(value);
      }
    },
  };
}

export function effect(fn) {
  subscriber = fn;
  fn();
  subscriber = null;
}

export function derived(fn) {
  const derived = signal();
  effect(() => {
    derived.value = fn();
  });

  return derived;
}
