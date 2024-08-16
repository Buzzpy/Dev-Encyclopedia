import { GET, useEffect, useState } from './z-js-framework/index.js';

const [filteredData, setFilteredData] = useState([]);
const [orignalData, setOrignalData] = useState([]);

export const useDataStore = () => [filteredData, setFilteredData, orignalData];

const loadData = async () => {
  const { data } = await GET('../content/categories/all/data.json');
  if (data) {
    // console.log('data::', data);
    let sortedData = data.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
    setFilteredData(sortedData);
    setOrignalData(sortedData);
  }
};

// runs once on initial load
useEffect(() => {
  loadData();
}, []);
