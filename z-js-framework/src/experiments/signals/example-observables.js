'use strict';

import { observable } from './observable.js';

const button = document.querySelector('#btn');

let count = observable(0);

count.subscribe((value) => {
  button.innerHTML = `clicked: ${value}`;
});

const unSub = count.subscribe((value) => {
  console.log(`subscribing: ${value}`);
});

unSub();

button.addEventListener('click', () => {
  count.increment();
});
