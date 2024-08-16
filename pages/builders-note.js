import { html } from '../z-js-framework/index.js';

export default function BuildersNote() {
  let UI = html`
    <div class="page content">
      <h3>A Note from the Builder</h3>
      <p>
        If you find a flaw, love to sponsor or need help with learning
        something, my inbox is open: <span>-></span>
        <a href="mailto:buzzpy123@gmail.com">buzzpy123@gmail.com</a>
      </p>
      <p>
        - I am a Python Developer specializing in backend so my
        <span class="bold"> web design skills </span> <span>are<span> 
        <span class="bold">terrible.</span>
      </p>
      <p>
        - This project was built in a month, unlike Rome which took years to
        build. Which means this is on early stages of development, so why not to
        <span class="bold"> fork, star and contribute? </span>
      </p>
    </div>
  `;
  return UI;
}
