// code for z js utilities and helpers
/**
 * Z Js Utility function
 * @description Acts as short hand for the standard console.log
 * @param {*} args
 * @returns  standard console methods
 */
export function print(args) {
  console.log(args);

  return { ...console };
}

/**
 * Generates a unique ID.
 *
 * @param {string} [keyword=''] - A keyword to include in the ID.
 * @param {number} [length=6] - The length of the random part of the ID.
 * @returns {string} The generated unique ID.
 */
export function generateUniqueId(keyword = '', length = 6) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '1234567890';
  let id = keyword;
  const timestamp = Date.now(); // Get the current timestamp in milliseconds
  const randomChar = characters.charAt(
    Math.floor(Math.random() * characters.length)
  );
  const randomNum = numbers.charAt(Math.floor(Math.random() * numbers.length));

  // Generate random letters for the specified length
  if (!keyword) {
    for (let i = 0; i < length; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }

  // Append the timestamp and a random character to the ID
  id += `_${timestamp}${randomChar}${randomNum}`;

  return id;
}

/**
 * Hashes a string using the DJB2 algorithm.
 *
 * @param {string} str - The string to hash.
 * @returns {string} The hashed string.
 */
export function hashString(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
  }
  return hash.toString(36);
}
