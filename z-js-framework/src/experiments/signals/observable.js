export function observable(value) {
  const subscribers = new Set();

  return {
    increment() {
      value++;
      this.update(value);
    },
    subscribe(subscriber) {
      subscribers.add(subscriber);
      return () => subscribers.delete(subscriber);
    },
    update(newValue) {
      value = newValue;
      for (const subscriber of subscribers) {
        subscriber(value);
      }
    },
    get() {
      return value;
    },
  };
}
