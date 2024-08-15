function buildCard({ title, shortDesc, slug }) {
    const card = document.createElement("div")
    card.dataset.slug = slug
    card.classList.add("card")

    const cardTitle = document.createElement("div")
    cardTitle.classList.add("card-title")
    cardTitle.textContent = title

    const cardSubText = document.createElement("div")
    cardSubText.textContent = shortDesc
    cardSubText.classList.add("card-subtext")

    const cardButton = document.createElement("button")
    cardButton.classList.add("explain-button")
    cardButton.textContent = "Explain"
    // TODO: USar addEventListener

    card.appendChild(cardTitle)
    card.appendChild(cardSubText)
    card.appendChild(cardButton)

    return card
}


export {
    buildCard
}