import { readFileSync, writeFileSync } from 'fs';
import { load } from 'cheerio';
import { descriptions } from './descriptions.js';

// Load the index.html file
const html = readFileSync('../index.html', 'utf8');

// Load the HTML into cheerio
const $ = load(html);

// Function to parse the HTML description into the desired structure
function parseDescription(htmlDescription) {
  const $ = load(htmlDescription);

  // Extract the title
  const title = $('#modal-heading').text().trim();

  // Extract the paragraphs
  const texts = $('p.modal-paragraph')
    .map((i, el) => $(el).text().trim())
    .get();

  // Extract the image URL
  const image = $('img').attr('src') || '';

  // Extract the references (links)
  const references = $('a#modal-link')
    .map((i, el) => $(el).attr('href'))
    .get();

  return {
    title,
    texts,
    image,
    references,
  };
}

// Function to convert a string to camelCase
function toCamelCase(str) {
  return str
    .toLowerCase() // Convert to lowercase
    .split(' ') // Split by spaces
    .map(
      (word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1) // Capitalize first letter of each word except the first
    )
    .join(''); // Join back into a single string
}

// Create an array to hold the card data
const cards = [];

// Iterate over each card element
$('.card').each((index, element) => {
  const cardTitle = $(element).find('.card-title').text().trim();
  const cardSubtext = $(element).find('.card-subtext').text().trim();

  // Convert the card title to camelCase
  const camelCaseTitle = toCamelCase(cardTitle);

  // Find the corresponding description using the camelCase title
  const description = descriptions[camelCaseTitle] || '';

  // Create the card object with the additional properties
  const card = {
    title: cardTitle,
    subtext: cardSubtext,
    category: 'all',
    author: 'Buzzpy',
    description: parseDescription(description),
  };

  // Add the card object to the array
  cards.push(card);
});

// Save the card data to a JSON file
writeFileSync('data.json', JSON.stringify(cards, null, 2), 'utf8');

console.log('All Cards data has been saved to data.json');
