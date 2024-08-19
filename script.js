document.addEventListener("DOMContentLoaded", () => {
    const definitionsUrl = "definitions.json";
    const cacheKey = "definitionsCache";

    // Function to fetch data
    async function fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    }

    // Function to get data from cache or fetch it
    async function getData() {
        const data = await fetchData(definitionsUrl);
        localStorage.setItem(cacheKey, JSON.stringify(data));
        return data;
    }

    // Function to build cards
    function buildCards(data) {
        const container = document.querySelector(".cards-container");
        container.innerHTML = ""; // Clear existing content

        Object.keys(data).forEach((key) => {
            const { title, subtext } = data[key];
            const card = document.createElement("div");
            card.className = "card";
            card.setAttribute("onclick", `showModal('${key}')`);

            const cardTitle = document.createElement("h3");
            cardTitle.className = "card-title";
            cardTitle.textContent = title;

            const cardSubtext = document.createElement("p");
            cardSubtext.className = "card-subtext";
            cardSubtext.textContent = subtext;

            card.appendChild(cardTitle);
            card.appendChild(cardSubtext);
            container.appendChild(card);
        });
    }

    // Initialize
    getData()
        .then((data) => {
            window.definitions = data; // Store data globally for modal access
            buildCards(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
});

function showModal(term) {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    const definition = definitions[term];

    if (definition) {
        let content = `
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>${definition.heading}</h2>
    `;

        definition.paragraphs.forEach((paragraph) => {
            content += `<p>${paragraph}</p>`;
        });

        if (definition.image) {
            content += `<img src="${definition.image}" alt="${definition.heading}">`;
        }

        if (definition.source) {
            content += `<p><a href="${definition.source}" class="modal-link" target="_blank">Read more</a></p>`;
        }

        modalBody.innerHTML = content;
    } else {
        modalBody.innerHTML = "<p>Definition not found.</p>";
    }

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function readMore() {
    // Redirect to detailed explanation page (e.g., a blog or documentation)
    window.open("https://example.com/detailed-explanation", "_blank");
}

function filterCards() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const title = card
            .querySelector(".card-title")
            .textContent.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Close the modal if clicked outside of it
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function showAbout() {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML =
        '<span class="close" onclick="closeModal()">&times;</span><h2>About</h2><strong>IMPORTANT: Bookmarking or Pinning this webpage would help you get a quick overview of anything related to tech in seconds! </strong><p>This "Dev Encyclopedia" is a simple project that simplifies things.</p><p>This website has almost all the commonly used technical terms, concepts and even programming-language specific jargons explained and links provided for further reading.</p><p>Most importantly, it is ad-free, so basically, the best encyclopedia everr! *excited. too much.*</p><p>Built with love, by Chenuli J.</p><img src="image/Chenuli Signature.png" />';
    modal.style.display = "block";
}

function showBuilders() {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML =
        '<span class="close" onclick="closeModal()">&times;</span><h3>A Note from the Builder</h3><p>If you find a flaw, love to sponsor or need help with learning something, my inbox is open: <span>-></span> <a href="mailto:buzzpy123@gmail.com">buzzpy123@gmail.com</a></p><p>- I am a Python Developer specializing in backend so my <strong> web design skills </strong> are <strong>terrible.</strong></p><p>- This project was built in a month, unlike Rome which took years to build. Which means this is on early stages of development, so why not to <strong>fork, star and contribute? </strong> </p>';
    modal.style.display = "block";
}

function showSponsors() {
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");

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
    modal.style.display = "block";
}

// Close the modal if clicked outside of it
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

document.addEventListener('keydown', function(event) {
  const searchInput = document.getElementById('searchInput');
  const modal = document.getElementById('modal');

  if (event.key === '/') {
    event.preventDefault(); // Prevent the default action of '/'
    searchInput.focus();
    if (modal.style.display === 'block') {
      closeModal();
    }
  }
});
