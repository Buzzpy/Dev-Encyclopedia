'use strict';

import { derived, effect, signal } from './index.js';

const button = document.querySelector('#btn');

let count = signal(0);

let double = derived(() => count.value * 2);

button.addEventListener('click', () => {
  count.value++;
});

effect(() => {
  console.log(`changed: ${count.value}`);
});

effect(() => {
  console.log(`double changed: ${double.value}`);
});

effect(() => {
  button.innerHTML = `clicked: ${count.value}`;
});
