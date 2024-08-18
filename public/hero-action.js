document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('aboutButton').addEventListener('click', showAbout);
    document.getElementById('builderButton').addEventListener('click', showBuilders);
    document.getElementById('sponsorButton').addEventListener('click', showSponsors);
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode)

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('keyup', filterCards);

    function filterCards() {
        const filter = searchInput.value.toLowerCase();
        const cards = document.getElementsByClassName('card');

        for (let i = 0; i < cards.length; i++) {
            const title = cards[i].getElementsByClassName('card-title')[0].innerText.toLowerCase();
            const keywords = cards[i].getAttribute('data-keywords').toLowerCase().split(',');

            // Check if the filter matches the title or any of the keywords
            if (title.indexOf(filter) > -1 || keywords.some(keyword => keyword.includes(filter))) {
                cards[i].style.display = '';
            } else {
                cards[i].style.display = 'none';
            }

            searchInput.addEventListener('keyup', filterCards);
        }
    }



    // Function to close the modal
    function closeModal(event) {
        const modal = document.getElementById('modal');
        if (event.target == modal) {
            modal.style.display = 'none';
            const cardContainer = document.getElementById('cardContainer');
            cardContainer.style.pointerEvents = 'all';
        }
    }

    window.addEventListener('click', closeModal);

    // Modal content functions
    function showAbout() {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
        <h2>About</h2>
        <strong>IMPORTANT: Bookmarking or Pinning this webpage would help you get a quick overview of anything related to tech in seconds!</strong>
        <p>This "Dev Encyclopedia" is a simple project that simplifies things.</p>
        <p>This website has almost all the commonly used technical terms, concepts and even programming-language specific jargons explained and links provided for further reading.</p>
        <p>Most importantly, it is ad-free, so basically, the best encyclopedia everr! *excited. too much.*</p>
        <p>Built with love, by Chenuli J.</p>
        <img src="../src/image/Chenuli_Signature.png" alt="Chenuli Signature"/>
      `;
        modal.style.display = 'block';
    }

    function showBuilders() {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
        <h3>A Note from the Builder</h3>
        <p>If you find a flaw, love to sponsor or need help with learning something, my inbox is open: <span>-></span> <a href="mailto:buzzpy123@gmail.com">buzzpy123@gmail.com</a></p>
        <p>- I am a Python Developer specializing in backend so my <strong>web design skills</strong> are <strong>terrible.</strong></p>
        <p>- This project was built in a month, unlike Rome which took years to build. Which means this is in the early stages of development, so why not <strong>fork, star, and contribute?</strong></p>
      `;
        modal.style.display = 'block';
    }

    function showSponsors() {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        modalBody.innerHTML = `
        <h3>Sponsors</h3>
        <p>You can sponsor this project via my Ko-Fi profile: <a href="https://ko-fi.com/buzzpy">ko-fi.com/buzzpy</a></p>
        <p>Once you make any donation, I will get in touch with you and make sure you get a place on this "Sponsors" page!</p>
        <div id="sponsors-container">
          <div class="sponsor-info">
            <img src="https://media.licdn.com/dms/image/D5603AQHJyX4hVmqjpQ/profile-displayphoto-shrink_200_200/0/1715316807453?e=2147483647&v=beta&t=7_xJ7ANI71x0vnvp1_2vj86V0kVvNDQGGflUzLfQBBk" alt="Malith J. Don" class="sponsor-image" />
            <a href="https://www.linkedin.com/in/malith-jayasinghe-484509180/" target="_blank" class="sponsor-name">Malith J. Don</a>
          </div>
          <div class="sponsor-info">
            <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" alt="Nethmi Dulanga Avatar" class="sponsor-image" />
            <a href="https://www.linkedin.com/in/nethmi-jayasinghe/" target="_blank" class="sponsor-name">Nethmi Dulanga</a>
          </div>
          <div class="sponsor-info">
            <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yzdevx4ebtzka0nz1wyt.png" alt="C. Pathirana Avatar" class="sponsor-image" />
            <span style="font-weight: bold;font-size: 15px;">C. Pathirana</span>
          </div>
          <div class="sponsor-info">
            <img src="https://cdn.prod.website-files.com/5c14e387dab576fe667689cf/64f1a9ddd0246590df69e9f4_ko-fi_logo_01.png" alt="Sponsor Us" class="sponsor-image" />
            <a href="https://ko-fi.com/buzzpy" target="_blank" class="sponsor-name">Sponsor Us</a>
          </div>
        </div>
      `;
        modal.style.display = 'block';
    }

    function toggleDarkMode() {
      const body = document.body;
      const toggleButton = document.getElementById('darkModeToggle');
      const darkModeText = document.getElementById('darkModeText');
      
      body.classList.toggle('dark-mode');
      
      if (body.classList.contains('dark-mode')) {
          localStorage.setItem('darkMode', 'enabled');
          toggleButton.innerHTML = '<i class="fas fa-sun" style="padding-right: 10px;"></i><span id="darkModeText"> Light Mode</span>';
      } else {
          localStorage.setItem('darkMode', 'disabled');
          toggleButton.innerHTML = '<i class="fas fa-moon" style="padding-right: 10px;"></i><span id="darkModeText"> Dark Mode</span>';
      }
    }
    
    window.onload = function() {
      const darkMode = localStorage.getItem('darkMode');
      const toggleButton = document.getElementById('darkModeToggle');
      
      if (darkMode === 'enabled') {
          document.body.classList.add('dark-mode');
          toggleButton.innerHTML = '<i class="fas fa-sun" style="padding-right: 10px;"></i><span id="darkModeText"> Light Mode</span>';
      } else {
          toggleButton.innerHTML = '<i class="fas fa-moon" style="padding-right: 10px;"></i><span id="darkModeText"> Dark Mode</span>';
      }
    };
});