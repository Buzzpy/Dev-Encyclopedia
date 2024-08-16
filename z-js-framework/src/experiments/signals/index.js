let subscriber = null;

export function signal(value) {
  const subscribers = new Set();

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
