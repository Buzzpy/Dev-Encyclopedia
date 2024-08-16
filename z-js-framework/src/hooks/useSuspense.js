/**
 * Creates a container that displays fallback content while awaiting a promise to resolve to actual desired content, such as that fetched from a backend API.
 *
 * @param {Function} promise - A function that returns a promise which resolves to the desired content.
 * @param {HTMLElement} fallback - An HTML element to display as a fallback while the promise is pending.
 * @param {Object} [options={}] - Optional settings.
 * @param {boolean} [options.retry=false] - Whether to retry the promise if it fails.
 * @param {number} [options.retryDelay=1000] - Delay in milliseconds before retrying the promise.
 * @param {number} [options.maxRetries=3] - Maximum number of retry attempts.
 * @returns {HTMLElement} - A container element that will be updated with the promise's resolved content.
 * @throws {Error} If fallback is not an HTML element or if the resolved content is not an HTML element.
 */
export function useSuspense(promise, fallback, options = {}) {
  const { retry = false, retryDelay = 1000, maxRetries = 3 } = options;

  // Ensure fallback is an HTML element
  if (!(fallback instanceof HTMLElement)) {
    throw new Error('Fallback must be an HTML element');
  }

  // Create a container element and append the fallback content
  const container = document.createElement('div');
  container.appendChild(fallback);

  let retryCount = 0;

  // Function to load content
  const loadContent = () => {
    promise()
      .then((content) => {
        // Ensure the resolved content is an HTML element
        if (!(content instanceof HTMLElement)) {
          throw new Error('Suspense content must be a valid HTML element');
        }

        // Replace the fallback with the resolved content
        container.innerHTML = '';
        container.appendChild(content);
      })
      .catch((error) => {
        if (retry && retryCount < maxRetries) {
          retryCount++;
          setTimeout(loadContent, retryDelay);
        } else {
          console.warn(`Error loading suspense content: ${error}`);
        }
      });
  };

  // Start loading content
  loadContent();

  return container;
}
