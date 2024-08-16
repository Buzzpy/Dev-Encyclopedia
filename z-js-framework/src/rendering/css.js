import { hashString } from '../utils/utilities.js';

const styleCache = new Map();
let styleSheet;

/**
 * Creates a CSS class with the given styles.
 *
 * @param {TemplateStringsArray} strings - Template literal strings.
 * @param {...*} values - Template literal values.
 * @returns {string} The generated class name.
 */
export function css(strings, ...values) {
  if (!styleSheet) {
    styleSheet = document.createElement('style');
    document.head.appendChild(styleSheet);
  }

  // Combine the strings and values into a single string of CSS
  const styleString = strings.reduce(
    (acc, str, i) => acc + str + (values[i] || ''),
    ''
  );

  // Generate a hash of the style string to ensure consistent class names
  const className = 'css-' + hashString(styleString);

  // Check if the style string is already in the cache
  if (styleCache.has(className)) {
    return styleCache.get(className);
  }

  // Create the CSS rule and append it to the style sheet
  const rule = `.${className} { ${styleString} }`;
  styleSheet.innerHTML += rule;

  // Cache the class name with the style string
  styleCache.set(className, className);

  return className;
}
