import htmlCards from "/data/html_cards.json" with { type: "json" };

let cardContainer = document.querySelector("#cardContainer")

htmlCards.forEach(element => {
    let card = document.createElement('div')

    card.classList.add('card')

    card.innerHTML = `
        <div class="card-title">${element.title}</div>
        <div class="card-subtext">${element.subtext}</div>
        <button class="explain-button" onclick="showModal('${element.slug}')">Explain</button>
    `
    
    cardContainer.appendChild(card)
})