import { Card } from '../components/card.js';
import { Modal } from '../components/modal.js';
import { useDataStore } from '../store.js';
import { getRef, html, useEffect, useState } from '../z-js-framework/index.js';

const [modalItem, setModalItem] = useState(null);

const [filteredData, setFilteredData] = useDataStore();

const showModal = (item) => {
  setModalItem(item);
  let target = getRef('modalRef');
  if (modalItem.current()) {
    target.innerHTML = '';
    let modalElement = Modal(modalItem);
    target.appendChild(modalElement);
    target.style.display = 'flex';
  }
};

export default function Home() {
  let UI = html`
    <main class="page">
      <div class="hero-section">
        <div class="hero-title" style="padding-top: 50px;">
          Dev Encyclopedia;
        </div>
        <div class="hero-paragraph">
          Find out what that Sr. Developer is talking about
        </div>
      </div>
      <div class="card-container" id="cardContainer" ref="cardsContainer"></div>
      <div ref="modalRef" style="display: none;"></div>
    </main>
  `;

  const renderFilteredData = () => {
    if (filteredData.current().length > 0) {
      let target = UI.querySelector('#cardContainer');
      let _data = filteredData.current();
      target.innerHTML = '';
      _data.forEach((item) => {
        let cardElement = Card(item, showModal);
        target.appendChild(cardElement);
      });
    }
  };

  // runs once on each page load i.e whenever we navigate to home and re-appends cards to container
  useEffect(() => {
    renderFilteredData();
  }, []);

  // runs every time filteredData changes i.e on filtering via search
  useEffect(() => {
    renderFilteredData();
  }, [filteredData]);

  return UI;
}
