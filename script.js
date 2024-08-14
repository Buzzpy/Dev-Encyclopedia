
/*
use the ./data/cards.json object for inserting new data
*/

import htmlCards from "./data/cards.json" with { type: "json" };

export  function filterCards() {
  const input = document.getElementById('searchInput');
  const filter = input.value.toLowerCase();
  const cards = document.getElementsByClassName('card');

  for (let i = 0; i < cards.length; i++) {
    const title = cards[i].getElementsByClassName('card-title')[0];
    if (title.innerText.toLowerCase().indexOf(filter) > -1) {
      cards[i].style.display = '';
    } else {
      cards[i].style.display = 'none';
    }
  }
}

export  function showModal(key) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  
  let content = htmlCards[key]?.content

  if(!!content){
    modalBody.innerHTML = `
    <h2 id="modal-heading">${content?.heading}</h2>
    ${
      content?.paragraphs?.reduce((acc,el)=>{
        return acc+`
          <p class="modal-paragraph">
            ${el}
          </p>
        `
      },``)
    }
    
    ${
      content?.images?.reduce((acc,el)=>{
        return acc+`
          <img src="${el.link}" alt="${el.description}">
        `
      },``)
    }
    <a href="${content?.link}" id="modal-link" target="_blank"> ⌁—— Read more about it ——⌁</a>
    `
  }else{
    modalBody.innerHTML = `
      <h2>This Page is Missing!</h2>

      <p>Can you find it?</p>
      <button class="button" onclick="window.open('https://github.com/Buzzpy/Programming-Simplified', '_blank')">
        <i class="fab fa-github" style="padding-right: 10px;"></i> Contribute;
      </button>
    `
  }

  

  modal.style.display = 'block';
}

export function readMore() {
  // Redirect to detailed explanation page (e.g., a blog or documentation)
  window.open('https://example.com/detailed-explanation', '_blank');
}

export function showAbout() {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = '<h2>About</h2><strong>IMPORTANT: Bookmarking or Pinning this webpage would help you get a quick overview of anything related to tech in seconds! </strong></p><p>This "Dev Encyclopedia" is a simple project that simplifies things.<p>This website has almost all the commonly used technical terms, concepts and even programming-language specific jargons explained and links provided for furthur reading.</p><p>Most importantly, it is ad-free, so basically, the best encyclopedia everr! *excited. too much.*</p><p>Built with love, by Chenuli J.</p><img src="image/Chenuli Signature.png"></img>';
  modal.style.display = 'block';
}

export function showBuilders() {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = '<h3>A Note from the Builder</h3><p>If you find a flaw, love to sponsor or need help with learning something, my inbox is open : <a href="mailto:buzzpy123@gmail.com">buzzpy123@gmail.com<a></p><p>-><p><p>- I am a Python Developer especilizing in backend so my <strong> web design skills </strong> are <strong>terrible.</strong></p><p>- This project was built in a month, unlike Rome which took years to build. Which means this is on early stages of development, so why not to <strong>fork, star and contribute? </strong> </p>';
  modal.style.display = 'block';
}


export function showSponsors() {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = '<h3>Sponsors</h3><p> You can sponsor this project via my Ko-Fi profile : <a href="https://ko-fi.com/buzzpy">ko-fi.com/buzzpy<a></p> <p>Once you make any donatioon, I will get in touch with you and make sure you get a place in this "Sponsors" page! </p>';
  modal.style.display = 'block';
}


   // to close the modal
export function closeModal(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Add event listeners for both click and touchstart
window.addEventListener('click', closeModal);
window.addEventListener('touchstart', closeModal);


//create Cards on homepage
function createCards(htmlCards){
  let cardContainer = document.querySelector("#cardContainer")

  for(let key in htmlCards){
    let card = document.createElement('div')

    card.classList.add('card')

    card.innerHTML = `
        <div class="card-title">${htmlCards[key].title}</div>
        <div class="card-subtext">${htmlCards[key].subtext}</div>
        <button class="explain-button" onclick="showModal('${key}')">Explain</button>
    `

    cardContainer.appendChild(card)
  }
}

createCards(htmlCards)
