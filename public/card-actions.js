document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.explain-button');

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const card = event.target.closest('.card');
      if (card) {
        const title = card.getAttribute('data-title');
        const description = card.getAttribute('data-description');
        const imageUrl = card.getAttribute('data-image-url');
        const resourceUrl = card.getAttribute('data-resource-url');
        showModal(title, description, imageUrl, resourceUrl);
      }
    });
  });

  // Close the modal when clicking outside of it
  const modal = document.getElementById('modal');
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});

// Function to display the modal
function showModal(title, description, imageUrl, resourceUrl) {
  const modalBody = document.getElementById('modal-body');

  // Replace any newline characters (\n) with HTML line breaks (<br/>)
  const formattedDescription = description.replace(/\n/g, '<br/>');

  modalBody.innerHTML = `
    <h2 id="modal-heading">${title}</h2>
    <p class="modal-paragraph">${formattedDescription}</p>
    <img src="${imageUrl}" alt="${title}" style="max-width: 100%; height: auto;">
    <a href="${resourceUrl}" id="modal-link" target="_blank">⌁—— Learn more about ${title} ——⌁</a>
  `;
  document.getElementById('modal').style.display = 'block';
}


// Function to close the modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}