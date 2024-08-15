function showModal({ title, paragraphs, link }){
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    const titleEl = `<h2 id="modal-heading">${title}</h2>`;
    const paragraphEls = paragraphs.map(p => `<p class="modal-paragraph">${p}</p>`).join('');

    const { href, text } = link || {};

    const readMoreEl = `<a href="${href}" id="modal-link" target="_blank">${text}</a>`;
    const html = href ? `${titleEl}${paragraphEls}${readMoreEl}` : `${titleEl}${paragraphEls}`;
    
    modalBody.innerHTML = html;
    modal.style.display = 'block';
}

function loadCard(key) {
    fetch(`./cards/${key}.json`)
    .then(resp => resp.json())
    .then(card => showModal(card))
    .catch(() => {
        showModal({
            title: 'Error',
            paragraphs: ['Could not load explanation. Please try again later.'],
        })
    })
}

function buildCard({ title, description, modalKey }){
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card-title');
    cardTitle.innerHTML = title

    card.appendChild(cardTitle);
    
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-description');
    cardBody.innerHTML = description;
    card.appendChild(cardBody);

    const actionBtn = document.createElement('button');
    actionBtn.classList.add('explain-button');
    actionBtn.innerHTML = 'Explain';
    actionBtn.onclick = () => loadCard(modalKey)
    card.appendChild(actionBtn);

    return card;
}

function loadCards(){
    const container = document.getElementById('cardContainer');
    container.innerHTML = '';

    keys.sort((a, b) => a.title.localeCompare(b.title))

    keys.forEach(({ key, title, description }) => {
        container.appendChild(buildCard({
            title,
            description,
            modalKey: key
        }))
    })
}

function filterCards() {
    const input = document.getElementById('searchInput');
    const cards = document.querySelectorAll('#cardContainer .card');
    const filter = input.value.toLowerCase();

    Array.from(cards).forEach(card => {
        const title = card.querySelector('.card-title').innerText.toLowerCase();
        card.style.display = title.includes(filter) ? '' : 'none';
    })
}

function showAbout() {
    showModal({
        title: 'About',
        paragraphs: [
            '<strong>IMPORTANT: Bookmarking or Pinning this webpage would help you get a quick overview of anything related to tech in seconds! </strong>',
            'This "Dev Encyclopedia" is a simple project that simplifies things.<p>This website has almost all the commonly used technical terms, concepts and even programming-language specific jargons explained and links provided for further reading.</p><p>Most importantly, it is ad-free, so basically, the best encyclopedia everr! *excited. too much.*',
            'Built with love, by Chenuli J.',
            '<img src="image/Chenuli Signature.png"></img>',
        ]
    })
}

function showBuilders() {
    showModal({
        title: 'A Note from the Builder',
        paragraphs: [
            'If you find a flaw, love to sponsor or need help with learning something, my inbox is open : <a href="mailto:buzzpy123@gmail.com">buzzpy123@gmail.com<a>',
            '- I am a Python Developer especilizing in backend so my <strong> web design skills </strong> are <strong>terrible.</strong>',
            '- This project was built in a month, unlike Rome which took years to build. Which means this is on early stages of development, so why not to <strong>fork, star and contribute? </strong>',
        ]
    })
}

function showSponsors() {
    showModal({
        title: 'Sponsors',
        paragraphs: [
            'You can sponsor this project via my Ko-Fi profile: <a href="https://ko-fi.com/buzzpy">ko-fi.com/buzzpy</a>',
            'Once you make any donation, I will get in touch with you and make sure you get a place on this "Sponsors" page!',
            `<div id="sponsor-info">
                <img src="https://media.licdn.com/dms/image/D5603AQHJyX4hVmqjpQ/profile-displayphoto-shrink_200_200/0/1715316807453?e=2147483647&v=beta&t=7_xJ7ANI71x0vnvp1_2vj86V0kVvNDQGGflUzLfQBBk" alt="Malith J. Don" id="sponsor-image" />
                <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Flk.linkedin.com%2Fin%2Fmalith-jayasinghe-484509180&psig=AOvVaw3pVLfvt056d-wG57Gc361x&ust=1723739678386000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCOijn-v09IcDFQAAAAAdAAAAABAK" id="sponsor-name">Malith J. Don</a>
            </div>`
        ]
    })
}

// to close the modal
function closeModal(event) {
  const modal = document.getElementById('modal');
  if (event.target == modal) {
    modal.style.display = 'none';
    setTimeout(() => {
      cardContainer.style.pointerEvents = 'all';
    },500)
  }
}

// Load the cards when the window is loaded
window.addEventListener('load', loadCards);

// Add event listeners for both click and touchstart
window.addEventListener('click', closeModal);
window.addEventListener('touchstart', closeModal);
