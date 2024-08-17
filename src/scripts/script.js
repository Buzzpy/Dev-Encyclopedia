document.addEventListener("DOMContentLoaded", () => {
  function showModal({ title, description, imageUrl, resourceUrl }) {
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
      <h2 id="modal-heading">${title}</h2>
      <p class="modal-paragraph">${description}</p>
      <img src="${imageUrl}" alt="${title}" style="max-width: 100%; height: auto;">
      <a href="${resourceUrl}" id="modal-link" target="_blank">⌁—— Learn more about ${title} ——⌁</a>
    `;
    document.getElementById('modal').style.display = 'block';
  }

  function closeModal(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

  // Attach event listeners to the buttons
  window.addEventListener('explain', (event) => {
    showModal(event.detail);
  });

  window.addEventListener('click', closeModal);
});
