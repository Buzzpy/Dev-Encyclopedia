document.addEventListener('DOMContentLoaded', async function() {
    document.getElementById('aboutButton').addEventListener('click', showAbout);
    document.getElementById('builderButton').addEventListener('click', showBuilders);
    document.getElementById('sponsorButton').addEventListener('click', showSponsors);
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

    const darkModeHTML = `<i class="fas fa-moon" style="padding-right: 10px;"></i><span id="darkModeText"> Dark Mode;</span>`;
    const lightModeHTML = `<i class="fas fa-sun" style="padding-right: 10px;"></i><span id="darkModeText"> Light Mode;</span>`;

    setTheme();

    function closeModal(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            modal.style.display = 'none';
            const cardContainer = document.getElementById('cardContainer');
            cardContainer.style.pointerEvents = 'all';
        }
    }

    window.addEventListener('click', closeModal);

    const searchInput = document.getElementById('searchInput');
    const noResultsMessage = document.getElementById('no-results-message');

    let currentFocus = -1; // Track the currently focused item in the autocomplete list

    // Fetch JSON file names from the API
    async function fetchJsonTitles() {
        try {
            const response = await fetch('/api/json-files'); // Adjust the path if necessary
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const titles = await response.json();
            return titles;
        } catch (error) {
            console.error('Error fetching JSON titles:', error);
            return [];
        }
    }

    const keywords = await fetchJsonTitles();
    console.log('Keywords for autocomplete:', keywords);

    const autocompleteList = document.getElementById('autocomplete-list');
    const maxItems = 5;

    searchInput.addEventListener('input', function() {
        const input = this.value;
        autocompleteList.innerHTML = '';
        currentFocus = -1;

        if (!input) {
            return false;
        }

        let itemCount = 0;

        keywords.forEach((keyword) => {
            if (itemCount >= maxItems) {
                return;
            }

            const displayKeyword = keyword.replace(/_/g, ' ');
            const regex = new RegExp(`(${input})`, 'gi');
            const highlightedKeyword = displayKeyword.replace(
                regex,
                `<span class="highlight">$1</span>`
            );

            if (displayKeyword.toLowerCase().includes(input.toLowerCase())) {
                const item = document.createElement('div');
                item.classList.add(
                    'autocomplete-item',
                    'list-group-item',
                    'list-group-item-action'
                );
                item.innerHTML = highlightedKeyword;
                item.addEventListener('click', function() {
                    searchInput.value = displayKeyword;
                    autocompleteList.innerHTML = '';
                    filterCards();
                    searchInput.focus();
                });
                autocompleteList.appendChild(item);
                itemCount++;
            }
        });

        autocompleteList.classList.add(
            'list-group',
            'shadow',
            'position-absolute',
            'w-100',
            'mt-1'
        );

        if (itemCount > maxItems) {
            autocompleteList.style.maxHeight = `${maxItems * 38}px`;
            autocompleteList.style.overflowY = 'auto';
        } else {
            autocompleteList.style.maxHeight = '';
            autocompleteList.style.overflowY = '';
        }
    });

    // Add keyboard navigation for the autocomplete
    searchInput.addEventListener('keydown', function(e) {
        const items = autocompleteList.getElementsByClassName('autocomplete-item');
        if (e.key === 'ArrowDown') {
            currentFocus++;
            addActive(items);
        } else if (e.key === 'ArrowUp') {
            currentFocus--;
            addActive(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currentFocus > -1 && items[currentFocus]) {
                items[currentFocus].click();
            }
        }
    });

    function addActive(items) {
        if (!items) return false;
        removeActive(items);
        if (currentFocus >= items.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = items.length - 1;
        items[currentFocus].classList.add('active');
    }

    function removeActive(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('active');
        }
    }

    document.addEventListener('click', function(e) {
        if (e.target !== searchInput) {
            autocompleteList.innerHTML = '';
        }
    });

    searchInput.addEventListener('keyup', filterCards);

    function filterCards() {
        const filter = searchInput.value.toLowerCase();
        const cards = document.getElementsByClassName('card');
        let foundAny = false;

        for (let i = 0; i < cards.length; i++) {
            const title = cards[i]
                .getElementsByClassName('card-title')[0]
                .innerText.toLowerCase();
            const keywords = cards[i]
                .getAttribute('data-keywords')
                .toLowerCase()
                .split(',');

            if (
                title.indexOf(filter) > -1 ||
                keywords.some((keyword) => keyword.includes(filter))
            ) {
                cards[i].style.display = '';
                foundAny = true;
            } else {
                cards[i].style.display = 'none';
            }
        }

        noResultsMessage.style.display = foundAny ? 'none' : 'block';
    }

    function toggleDarkMode() {
        const body = document.body;

        if (body.classList.contains('dark-mode')) {
            handleSetTheme('light');
        } else {
            handleSetTheme('dark');
        }
    }

    function handleSetTheme(theme) {
        const body = document.body;
        const toggleButton = document.getElementById('darkModeToggle');

        if (theme === 'dark') {
            localStorage.setItem('theme', 'dark');
            body.classList.add('dark-mode');
            toggleButton.innerHTML = darkModeHTML;
        } else {
            localStorage.setItem('theme', 'light');
            body.classList.remove('dark-mode');
            toggleButton.innerHTML = lightModeHTML;
        }
    }

    function setTheme() {
        const theme = localStorage.getItem('theme');

        if (theme === 'dark') {
            handleSetTheme('dark');
        } else {
            handleSetTheme('light');
        }
    }
});
