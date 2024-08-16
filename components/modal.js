import { getRef, html, useEffect } from '../z-js-framework/dist/z.js';

export const Modal = (item) => {
  const closeModal = (e) => {
    if (e.target.id === 'modal') {
      e.target.style.display = 'none';
    }
  };
  let UI = html`<div id="modal" onclick="${closeModal}">
    <div id="modal-content">
      <div id="modal-body">
        <h2 id="modal-heading">${item.current().description.title}</h2>

        <div ref="paragraphs">-- paragraphs --</div>
        <div ref="imageRef"></div>
        <div ref="links">-- references --</div>
        <br />
        <p>Added By: ${item.current().author}</p>
      </div>
    </div>
  </div>`;

  useEffect(() => {
    let paragraphsElement = getRef('paragraphs');
    let linksElement = getRef('links');
    let imageElementContainer = getRef('imageRef');

    let _item = item.current();

    let texts = _item.description.texts;
    let links = _item.description.references;
    let image = _item.description.image;

    if (paragraphsElement && texts.length > 0) {
      paragraphsElement.innerHTML = '';
      texts.forEach((text) => {
        let _text = html`<p class="modal-paragraph">${text}</p>`;
        paragraphsElement.appendChild(_text);
      });
    }
    if (linksElement && links.length > 0) {
      linksElement.innerHTML = '';
      links.forEach((link) => {
        let _link = html`<a href="${link}" target="_blank" class="modal-link">
          ⌁—— Read more about it ——⌁
        </a>`;
        linksElement.appendChild(_link);
      });
    }
    if (imageElementContainer && image) {
      let img = html`<img
        class="responsive-image"
        src="${image}"
        alt="${_item.title}"
        id="modal-image" />`;
      imageElementContainer.appendChild(img);
    }
  }, []);

  return UI;
};
