/**
 * Hybrid search algorithm that combines efficiency of phase-based search with comprehensiveness.
 * It searches through phases until a minimum result count is met or all phases are exhausted.
 */

/**
 * Performs a binary search to find the index of the first potential match or insertion point.
 * @param {Array} items - The sorted array of items to search.
 * @param {string} property - The property of the items to search on.
 * @param {string} searchTerm - The term to search for.
 * @returns {number} The index of the first potential match or insertion point.
 */
function binarySearchIndex(items, property, searchTerm) {
  let left = 0;
  let right = items.length - 1;
  const searchValue = searchTerm.toLowerCase();

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = items[mid][property].toLowerCase();

    if (midValue === searchValue) {
      let firstMatch = mid;
      while (
        firstMatch > 0 &&
        items[firstMatch - 1][property].toLowerCase() === searchValue
      ) {
        firstMatch--;
      }
      return firstMatch;
    }

    if (midValue < searchValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

/**
 * Searches for items based on a specific property.
 * @param {Array} items - The array of items to search.
 * @param {string} property - The property to search on (e.g., 'title', 'subtext').
 * @param {string} searchTerm - The term to search for.
 * @returns {Array} An array of matching items, sorted by the searched property.
 */
function searchByProperty(items, property, searchTerm) {
  const sortedItems = [...items].sort((a, b) =>
    a[property].localeCompare(b[property])
  );
  const startIndex = binarySearchIndex(sortedItems, property, searchTerm);

  const results = [];
  const lowerSearchTerm = searchTerm.toLowerCase();

  for (let i = startIndex; i < sortedItems.length; i++) {
    if (sortedItems[i][property].toLowerCase().startsWith(lowerSearchTerm)) {
      results.push(sortedItems[i]);
    } else {
      break;
    }
  }

  return results;
}

// Phase-specific search functions
function searchByTitle(items, searchTerm) {
  return searchByProperty(items, 'title', searchTerm);
}

function searchBySubtext(items, searchTerm) {
  return searchByProperty(items, 'subtext', searchTerm);
}

function searchByCategory(items, searchTerm) {
  return searchByProperty(items, 'category', searchTerm);
}

function searchByAuthor(items, searchTerm) {
  return searchByProperty(items, 'author', searchTerm);
}

/**
 * Main search function that orchestrates the hybrid multi-phase search process.
 * @param {Array} items - The array of items to search.
 * @param {string} searchTerm - The term to search for.
 * @param {number} minPhaseCount - Minimum number of results to aim for in each phase.
 * @returns {Array} An array of matching items from all searched phases, without duplicates.
 */
export function searchItems(items, searchTerm, minPhaseCount = 10) {
  const phases = [
    searchByTitle,
    searchBySubtext,
    searchByCategory,
    searchByAuthor,
  ];
  const uniqueResults = new Set();
  let totalResults = 0;

  for (const phase of phases) {
    const phaseResults = phase(items, searchTerm);
    for (const item of phaseResults) {
      if (!uniqueResults.has(JSON.stringify(item))) {
        uniqueResults.add(JSON.stringify(item));
        totalResults++;
      }
    }

    if (totalResults >= minPhaseCount) {
      break;
    }
  }

  // Convert back to array of objects and sort by relevance
  const results = Array.from(uniqueResults).map(JSON.parse);
  results.sort((a, b) => {
    const aMatches = phases.filter(
      (phase) => phase([a], searchTerm).length > 0
    ).length;
    const bMatches = phases.filter(
      (phase) => phase([b], searchTerm).length > 0
    ).length;
    if (bMatches !== aMatches) {
      return bMatches - aMatches;
    }
    return a.title.localeCompare(b.title);
  });

  return results;
}

/**
 * Hybrid Algorithm Overview:
 * 1. The search process goes through phases (title, subtext, category, author) until:
 *    a) The total unique results reach or exceed the minPhaseCount, or
 *    b) All phases have been searched
 * 2. For each phase:
 *    a. Items are sorted based on the current property.
 *    b. Binary search is used to find the starting point for potential matches.
 *    c. Matching items are collected and added to the unique results set.
 * 3. Results from all searched phases are combined, removing duplicates.
 * 4. Final results are sorted based on relevance (number of matching properties) and then alphabetically by title.
 *
 * Key Features:
 * - Balances efficiency and comprehensiveness by using a minimum result count threshold.
 * - Efficient searching using binary search algorithm within each phase.
 * - Removes duplicate results across phases.
 * - Relevance-based sorting of final results.
 * - Case-insensitive searching for better user experience.
 * - Flexible: minPhaseCount can be adjusted based on specific needs.
 *
 * Time Complexity:
 * - Best case: O(n log n) if the first phase satisfies minPhaseCount
 * - Worst case: O(pn log n + m log m), where p is the number of phases and m is the total number of unique matches
 *
 * Space Complexity:
 * - O(n) for creating a sorted copy of the items array in each phase
 * - O(m) for storing unique results, where m is the total number of unique matches
 *
 * Note: This algorithm considers partial matches at the start of the property value as valid results.
 * Modify the comparison in searchByProperty if exact matches are required.
 */
