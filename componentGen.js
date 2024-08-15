import { MODAL_CONTENT_TYPES } from "./constants.js"

function buildCard({ title, shortDesc, slug, keywords }) {
    const card = document.createElement("div")
    card.dataset.slug = slug
    card.dataset.keywords = JSON.stringify(keywords)
    card.dataset.name = title
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

    card.appendChild(cardTitle)
    card.appendChild(cardSubText)
    card.appendChild(cardButton)

    return card
}

function buildSponsor({ name, link, imgSrc, imgAlt }) {
    const sponsorCard = document.createElement("div")
    sponsorCard.classList.add("sponsor-info")

    const imgEl = document.createElement("img")
    imgEl.classList.add("sponsor-image")
    imgEl.src = imgSrc
    imgEl.alt = imgAlt
    sponsorCard.appendChild(imgEl)

    const linkEl = document.createElement("a")
    linkEl.classList.add("sponsor-name")
    linkEl.href = link
    linkEl.textContent = name
    sponsorCard.appendChild(linkEl)

    return sponsorCard
}

function buildElement(element) {
    var genEl = null

    if (element.type === MODAL_CONTENT_TYPES.p) {
        genEl = document.createElement("p")
        genEl.textContent = element.content
    }

    if (element.type === MODAL_CONTENT_TYPES.img) {
        genEl = document.createElement("img")
        genEl.src = element.src
        genEl.alt = element.alt
    }

    if (element.type === MODAL_CONTENT_TYPES.strong) {
        genEl = document.createElement("strong")
        genEl.textContent = element.content
    }

    if (element.type === MODAL_CONTENT_TYPES.link) {
        genEl = document.createElement("a")
        genEl.textContent = element.content
        genEl.href = element.ref
    }

    if (element.type === MODAL_CONTENT_TYPES.plainText) {
        genEl = document.createTextNode(element.content)
    }

    if (element.type === MODAL_CONTENT_TYPES.multipart) {
        genEl = document.createElement("p")

        for (const part of element.content) {
            genEl.appendChild(buildElement(part).genEl)
        }
    }

    if (element.type === MODAL_CONTENT_TYPES.htmlEl) {
        genEl = element.content
    }

    return { genEl, type: element.type }
}

function buildModal({ title, content, link }) {
    const modalContainer = document.createElement("dialog")
    const modal = document.createElement("div")
    modalContainer.appendChild(modal)

    const titleEl = document.createElement("h2")
    titleEl.classList.add("modal-heading")
    titleEl.textContent = title
    modal.appendChild(titleEl)

    for (const element of content) {
        const { genEl, type } = buildElement(element)

        if (type === MODAL_CONTENT_TYPES.p) {
            genEl.classList.add("modal-paragraph")
        }

        modal.appendChild(genEl)
    }

    if (link) {
        const linkEl = document.createElement("a")
        linkEl.href = link.ref
        linkEl.textContent = link.text
        linkEl.target = "_blank"
        linkEl.id = "modal-link"
        modal.appendChild(linkEl)
    }

    modalContainer.addEventListener("click", (e) => {
        // console.log(e.target);
        if (e.target == modalContainer) {
            modalContainer.remove()
        }

    })

    return modalContainer
}


export {
    buildCard, buildElement, buildModal, buildSponsor
}