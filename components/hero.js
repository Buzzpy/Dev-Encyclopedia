import { html } from '../z-js-framework/dist/z.js';

export const HeroSection = (filterData) => {
  const filterCards = (e) => {
    // console.log(e.target.value);
    filterData(e.target.value);
  };

  let UI = html` <div class="hero-section">
    <div class="search-bar" style="padding-bottom: 30px;">
      <i class="fas fa-search"></i>
      <input
        type="text"
        id="searchInput"
        onKeyup="${filterCards}"
        placeholder="Search for keywords..." />
    </div>
    <div class="buttons">
      <!-- Home Page Link -->
      <z-link to="/home" target="dynamicView">
        <button class="button">
          <span>
            <i class="fas fa-home" style="padding-right: 10px;"></i>
          </span>
          <span>Home;</span>
        </button>
      </z-link>
      <!-- About Page Link -->
      <z-link to="/about" target="dynamicView">
        <button class="button">
          <span>
            <i class="fas fa-user" style="padding-right: 10px;"></i>
          </span>
          <span>About;</span>
        </button>
      </z-link>
      <!-- Contribution Link -->
      <a
        href="https://github.com/Buzzpy/Dev-Encyclopedia"
        target="_blank"
        rel="noopener noreferrer">
        <button class="button">
          <span>
            <i class="fab fa-github" style="padding-right: 10px;"></i>
          </span>
          <span>Contribute;</span>
        </button>
      </a>
      <!-- Builder's Note Page Link -->
      <z-link to="/builders-note" target="dynamicView">
        <button class="button">
          <span>
            <i class="fas fa-hammer" style="padding-right: 10px;"></i>
          </span>
          <span>Builder's Note;</span>
        </button>
      </z-link>
      <!-- Sponsors Page Link -->
      <z-link to="/sponsors" target="dynamicView">
        <button class="button">
          <span>
            <i class="fa-solid fa-dollar-sign" style="padding-right: 10px;"></i>
          </span>
          <span>Sponsor;</span>
        </button>
      </z-link>
    </div>
  </div>`;

  return UI;
};
