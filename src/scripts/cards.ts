import { showModal } from "./modal"

const cardContainer = document.querySelector(".card-container")

cardContainer?.addEventListener("click", (e) => {
  const target = e.target as HTMLElement | null
  const card = target?.closest(".card")
  const isExplainBtn = card?.querySelector(".card > .explain-button") === target

  if (isExplainBtn) {
    const title = card.getAttribute("data-title")!
    const description = card.getAttribute("data-description")!
    const imageUrl = card.getAttribute("data-image-url")
    const resourceUrl = card.getAttribute("data-resource-url")

    showModal(title, description, imageUrl, resourceUrl)
  }
})
