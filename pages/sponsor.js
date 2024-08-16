import { html } from '../z-js-framework/index.js';

export default function Sponsor() {
  let UI = html`
    <div class="page content">
      <h3>Sponsors</h3>
      <p>
        You can sponsor this project via my Ko-Fi profile:
        <a href="https://ko-fi.com/buzzpy">ko-fi.com/buzzpy</a>
      </p>
      <p>
        Once you make any donation, I will get in touch with you and make sure
        you get a place on this "Sponsors" page!
      </p>
      <div id="sponsor-info">
        <img
          src="https://media.licdn.com/dms/image/D5603AQHJyX4hVmqjpQ/profile-displayphoto-shrink_200_200/0/1715316807453?e=2147483647&v=beta&t=7_xJ7ANI71x0vnvp1_2vj86V0kVvNDQGGflUzLfQBBk"
          alt="Malith J. Don"
          id="sponsor-image" />
        <a
          href="https://www.google.com/url?sa=i&url=https%3A%2F%2Flk.linkedin.com%2Fin%2Fmalith-jayasinghe-484509180&psig=AOvVaw3pVLfvt056d-wG57Gc361x&ust=1723739678386000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCOijn-v09IcDFQAAAAAdAAAAABAK"
          id="sponsor-name"
          >Malith J. Don</a
        >
      </div>
    </div>
  `;
  return UI;
}
