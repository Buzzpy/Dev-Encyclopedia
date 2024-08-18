document.addEventListener('DOMContentLoaded', async function() {
    document.getElementById('aboutButton').addEventListener('click', showAbout);
    document.getElementById('builderButton').addEventListener('click', showBuilders);
    document.getElementById('sponsorButton').addEventListener('click', showSponsors);
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode)

    // Fetch JSON file names from the API
    async function fetchJsonFileNames() {
        try {
            const response = await fetch('/api/json-files');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching JSON files:', error);
            return [];
        }
    }

    // Fetch the keywords for the autocomplete
    const keywords = await fetchJsonFileNames();
    console.log('Keywords for autocomplete:', keywords);

    const searchInput = document.getElementById('searchInput');
    const autocompleteList = document.getElementById('autocomplete-list');
    const maxItems = 5;

    searchInput.addEventListener('input', function() {
        const input = this.value;
        autocompleteList.innerHTML = '';

        if (!input) {
            return false;
        }

        let itemCount = 0;

        keywords.forEach(keyword => {
            if (itemCount >= maxItems) {
                return;
            }

            const displayKeyword = keyword.replace(/_/g, ' ');
            const regex = new RegExp(`(${input})`, 'gi');
            const highlightedKeyword = displayKeyword.replace(regex, `<span class="highlight">$1</span>`);

            if (displayKeyword.toLowerCase().includes(input.toLowerCase())) {
                const item = document.createElement('div');
                item.classList.add('autocomplete-item', 'list-group-item', 'list-group-item-action');
                item.innerHTML = highlightedKeyword;
                item.addEventListener('click', function() {
                    searchInput.value = displayKeyword;
                    autocompleteList.innerHTML = '';
                    filterCards();
                });
                autocompleteList.appendChild(item);
                itemCount++;
            }
        });

        autocompleteList.classList.add('list-group', 'shadow', 'position-absolute', 'w-100', 'mt-1');

        // Add a scroll bar if the number of items exceeds the maxItems limit
        if (itemCount > maxItems) {
            autocompleteList.style.maxHeight = `${maxItems * 38}px`;
            autocompleteList.style.overflowY = 'auto';
        } else {
            autocompleteList.style.maxHeight = '';
            autocompleteList.style.overflowY = '';
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target !== searchInput) {
            autocompleteList.innerHTML = '';
        }
    });

    // Search Functionality
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
        }
    }

    // Function to load and display the card for the selected keyword
    async function loadCardForKeyword(keyword) {
        try {
            const response = await fetch(`/content/terms/${keyword}.json`); // Adjust the path as needed
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            displayCard(data);
        } catch (error) {
            console.error('Error fetching JSON data:', error);
        }
    }

    // Function to display the card
    function displayCard(data) {
        const cardContainer = document.getElementById('cardContainer');
        
        let descriptionContent = '';
        
        if (typeof data.description === 'object') {
            for (const [key, value] of Object.entries(data.description)) {
                if (key === 'texts') {
                    descriptionContent += value.map(text => `<p>${text}</p>`).join('');
                } else if (key === 'image') {
                    descriptionContent += `<img src="${value}" alt="${data.title}" class="img-fluid mb-3">`;
                } else if (key === 'references') {
                    descriptionContent += `<h6>References:</h6><ul>` +
                        value.map(ref => `<li><a href="${ref}" target="_blank">${ref}</a></li>`).join('') +
                        `</ul>`;
                } else {
                    descriptionContent += `<p><strong>${key}:</strong> ${value}</p>`;
                }
            }
        } else {
            descriptionContent = data.description || 'No Description';
        }

        cardContainer.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${data.title || 'No Title'}</h5>
                    <div class="card-text">${descriptionContent}</div>
                </div>
            </div>
        `;
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
        <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nkgm404nnkmjqvhjvl61.png" alt="Chenuli Signature"/>
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
          toggleButton.innerHTML = '<i class="fas fa-sun" style="padding-right: 10px;"></i><span id="darkModeText"> Light Mode;</span>';
      } else {
          localStorage.setItem('darkMode', 'disabled');
          toggleButton.innerHTML = '<i class="fas fa-moon" style="padding-right: 10px;"></i><span id="darkModeText"> Dark Mode;</span>';
      }
    }
    
    window.onload = function() {
      const darkMode = localStorage.getItem('darkMode');
      const toggleButton = document.getElementById('darkModeToggle');
      
      if (darkMode === 'enabled') {
          document.body.classList.add('dark-mode');
          toggleButton.innerHTML = '<i class="fas fa-sun" style="padding-right: 10px;"></i><span id="darkModeText"> Light Mode;</span>';
      } else {
          toggleButton.innerHTML = '<i class="fas fa-moon" style="padding-right: 10px;"></i><span id="darkModeText"> Dark Mode;</span>';
      }
    };
});