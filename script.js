import { buildCard } from "./cardGen.js";
import { cards } from "./cardData.js";


function displaytCards(cards) {
  const cardContainer = document.getElementById("cardContainer")
  for (const card of cards) {
    const cardEl = buildCard(card)
    cardContainer.appendChild(cardEl)
  }
}

displaytCards(cards)

// function filterCards() {
//   const input = document.getElementById('searchInput');
//   const filter = input.value.toLowerCase();
//   const cards = document.getElementsByClassName('card');

//   for (let i = 0; i < cards.length; i++) {
//     const title = cards[i].getElementsByClassName('card-title')[0];
//     if (title.innerText.toLowerCase().indexOf(filter) > -1) {
//       cards[i].style.display = '';
//     } else {
//       cards[i].style.display = 'none';
//     }
//   }
// }
// const cardContainer = document.getElementById('cardContainer');
// function showModal(term) {
//   const modal = document.getElementById('modal');
//   const modalBody = document.getElementById('modal-body');
//   modalBody.innerHTML = descriptions[term];
//   modal.style.display = 'block';
//   cardContainer.style.pointerEvents = 'none';
// }

// function readMore() {
//   // Redirect to detailed explanation page (e.g., a blog or documentation)
//   window.open('https://example.com/detailed-explanation', '_blank');
// }

// function showAbout() {
//   const modal = document.getElementById('modal');
//   const modalBody = document.getElementById('modal-body');
//   modalBody.innerHTML = '<h2>About</h2><strong>IMPORTANT: Bookmarking or Pinning this webpage would help you get a quick overview of anything related to tech in seconds! </strong><p>This "Dev Encyclopedia" is a simple project that simplifies things.</p><p>This website has almost all the commonly used technical terms, concepts and even programming-language specific jargons explained and links provided for further reading.</p><p>Most importantly, it is ad-free, so basically, the best encyclopedia everr! *excited. too much.*</p><p>Built with love, by Chenuli J.</p><img src="image/Chenuli Signature.png" />';
//   modal.style.display = 'block';
// }
// function showBuilders() {
//   const modal = document.getElementById('modal');
//   const modalBody = document.getElementById('modal-body');
//   modalBody.innerHTML = '<h3>A Note from the Builder</h3><p>If you find a flaw, love to sponsor or need help with learning something, my inbox is open: <span>-></span> <a href="mailto:buzzpy123@gmail.com">buzzpy123@gmail.com</a></p><p>- I am a Python Developer especilizing in backend so my <strong> web design skills </strong> are <strong>terrible.</strong></p><p>- This project was built in a month, unlike Rome which took years to build. Which means this is on early stages of development, so why not to <strong>fork, star and contribute? </strong> </p>';
//   modal.style.display = 'block';
// }
// function showSponsors() {
//   const modal = document.getElementById('modal');
//   const modalBody = document.getElementById('modal-body');

//   modalBody.innerHTML = `
//         <h3>Sponsors</h3>
//         <p>You can sponsor this project via my Ko-Fi profile: <a href="https://ko-fi.com/buzzpy">ko-fi.com/buzzpy</a></p>
//         <p>Once you make any donation, I will get in touch with you and make sure you get a place on this "Sponsors" page!</p>
//         <div id="sponsor-info">
//           <img src="https://media.licdn.com/dms/image/D5603AQHJyX4hVmqjpQ/profile-displayphoto-shrink_200_200/0/1715316807453?e=2147483647&v=beta&t=7_xJ7ANI71x0vnvp1_2vj86V0kVvNDQGGflUzLfQBBk" alt="Malith J. Don" id="sponsor-image" />
//           <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Flk.linkedin.com%2Fin%2Fmalith-jayasinghe-484509180&psig=AOvVaw3pVLfvt056d-wG57Gc361x&ust=1723739678386000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCOijn-v09IcDFQAAAAAdAAAAABAK" id="sponsor-name">Malith J. Don</a>
//         </div>
//       `;
//   modal.style.display = 'block';
// }



// // to close the modal
// function closeModal(event) {
//   const modal = document.getElementById('modal');
//   if (event.target == modal) {
//     modal.style.display = 'none';
//     setTimeout(() => {
//       cardContainer.style.pointerEvents = 'all';
//     }, 500)
//   }
// }

// // Add event listeners for both click and touchstart
// window.addEventListener('click', closeModal);
// window.addEventListener('touchstart', closeModal);



