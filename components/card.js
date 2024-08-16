import { html } from '../z-js-framework/index.js';

export const Card = (item, showModal) => {
  let UI = html` <div class="card">
    <div class="card-title">${item.title}</div>
    <div class="card-subtext">${item.subtext}</div>
    <button class="explain-button" onClick="${() => showModal(item)}">
      Explain
    </button>
  </div>`;

  return UI;
};
