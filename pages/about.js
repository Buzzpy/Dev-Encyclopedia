import { html } from '../z-js-framework/dist/z.js';

export default function About() {
  let UI = html`
    <div class="page content">
      <h2>About</h2>
      <span class="bold"
        >IMPORTANT: Bookmarking or Pinning this webpage would help you get a
        quick overview of anything related to tech in seconds!
      </span>
      <p>This "Dev Encyclopedia" is a simple project that simplifies things.</p>
      <p>
        This website has almost all the commonly used technical terms, concepts
        and even programming-language specific jargons explained and links
        provided for further reading.
      </p>
      <p>
        Most importantly, it is ad-free, so basically, the best encyclopedia
        everr! *excited. too much.*
      </p>
      <p>Built with love, by Chenuli J.</p>
      <img src="image/Chenuli Signature.png" />
    </div>
  `;
  return UI;
}
