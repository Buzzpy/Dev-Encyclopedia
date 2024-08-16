import Home from '../pages/home.js';
import { useDataStore } from '../store.js';
import { searchItems } from '../utils/search.js';
import { html } from '../z-js-framework/index.js';
import { HeroSection } from './hero.js';

export const Layout = () => {
  const [filteredData, setFilteredData, orignalData] = useDataStore();

  const filterData = (searchString) => {
    if (!searchString) {
      setFilteredData(orignalData.current());
    } else {
      const results = searchItems(orignalData.current(), searchString, 10);
      setFilteredData(results);
    }
  };

  let UI = html`
    <div class="layout">
      ${HeroSection(filterData)}
      <main class="page" id="dynamicView">${Home()}</main>
    </div>
  `;

  return UI;
};
