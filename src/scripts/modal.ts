const modal = document.getElementById("modal")!
const body = document.body

// Close the modal when clicking outside of it
modal?.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal()
  }
})

// Close the modal when pressing the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.style.display === "block") {
    closeModal()
  }
})

// Function to display the modal
export function showModal(
  title: string,
  description: string,
  imageUrl: string | null = "",
  resourceUrl: string | null = ""
) {
  const modalBody = document.getElementById("modal-body")!

  // Replace any newline characters (\n) with HTML line breaks (<br/>)
  const formattedDescription = description.replace(/\n/g, "<br/>")

  // Conditionally include the image if the URL is not empty
  const imageElement =
    imageUrl && imageUrl.trim() !== ""
      ? `<img src="${imageUrl}" alt="${title}" style="max-width: 100%; height: auto;">`
      : ""

  modalBody.innerHTML = `
      <h2 id="modal-heading">${title}</h2>
      <p class="modal-paragraph">${formattedDescription}</p>
      ${imageElement} <!-- Only include the image if imageUrl is not empty -->
      <a href="${resourceUrl}" id="modal-link" target="_blank">⌁—— Learn more about ${title} ——⌁</a>
    `
  // Modify display style of modal to be block if click event is detected
  if (modal) {
    modal.style.display = "block"
  }
  body.classList.add("modal-open")
}

// Function to close the modal
export function closeModal() {
  modal.style.display = "none"
  body.classList.remove("modal-open")
}
