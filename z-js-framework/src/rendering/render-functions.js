/**
 * Renders a component function to a parent element.
 *
 * @param {HTMLElement} parentElement - The parent element to render the component to.
 * @param {Function} componentFunction - The component function to render.
 */
export function render(parentElement, componentFunction) {
  parentElement.innerHTML = '';
  parentElement.appendChild(componentFunction());
}
