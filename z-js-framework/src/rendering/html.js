import { generateUniqueId } from '../utils/utilities.js';
import morphdom from '../libs/morphdom-esm@v2.7.3.js';

const trackedStates = new Set();
const refs = new Set();
let isRenderingList = false;
let refElements = [];

/**
 * Processes a tagged template literal and returns an HTML element.
 *
 * @param {TemplateStringsArray} strings - Template literal strings.
 * @param {...*} values - Template literal values.
 * @returns {HTMLElement | Text} The created HTML element.
 */
export function html(strings, ...values) {
  // Store functions, states and elements separately for future use
  const functions = [];
  const elements = [];
  !isRenderingList && trackedStates.clear();
  const valueHandlers = {
    function: handleFunction,
    HTMLElement: handleHTMLElement,
    Text: handleText,
    Array: handleArray,
    default: handleDefault,
  };

  // Construct the full string from the template literal parts
  const fullString = strings.reduce((acc, str, i) => {
    if (i < values.length) {
      const value = values[i];
      const valueType = getValueType(value);
      const handler = valueHandlers[valueType];
      return acc + str + handler(value, i);
    }
    return acc + str;
  }, '');

  values.forEach((value, index) => {
    if (typeof value === 'function') {
      functions.push({
        name: `__FUNCTION_${index}__`,
        fn: value,
      });
    } else if (value instanceof HTMLElement) {
      const uniqueId = value.getAttribute('_id') || generateUniqueId('ELEMENT');
      value.setAttribute('_id', uniqueId);
      elements.push({
        name: uniqueId,
        element: value,
      });
    }
  });

  function handleFunction(value, index) {
    return `__FUNCTION_${index}__`;
  }

  function handleHTMLElement(value) {
    const uniqueId = value.getAttribute('_id') || generateUniqueId('ELEMENT');
    value.setAttribute('_id', uniqueId);
    return `<div _id="${uniqueId}"></div>`;
  }

  function handleText(value) {
    return value.textContent;
  }

  function handleArray(value) {
    return value
      .map((item) => {
        if (item instanceof HTMLElement) return handleHTMLElement(item);
        if (item instanceof Text) return handleText(item);
        return escapeHTML(`${item}`);
      })
      .join('');
  }

  function handleDefault(value) {
    return value !== undefined ? evalValue(value) : '';
  }

  function getValueType(value) {
    if (typeof value === 'function') return 'function';
    if (value instanceof HTMLElement) return 'HTMLElement';
    if (value instanceof Text) return 'Text';
    if (Array.isArray(value)) return 'Array';
    return 'default';
  }

  function evalValue(value) {
    if (typeof value === 'object' && value?.type === 'LIST') {
      let placeholder = `<div list="${value.id}">list</div>`;

      let listRefExists = false;
      refs.forEach((ref) => {
        if (ref.ref === value.ref && ref.type === value.type) {
          listRefExists = true;
        }
      });

      if (!listRefExists) {
        // track ref
        refs.add({
          ref: value.ref,
          type: value.type,
          id: value.id,
          fn: value.fn,
        });
      }

      return placeholder;
    }
    if (typeof value === 'object' && value.hasOwnProperty('value')) {
      trackedStates.add(value);
      return value.current();
    } else if (Array.isArray(value)) {
      return value.map((item) => escapeHTML(`${item}`)).join('');
    } else {
      return escapeHTML(`${value}`);
    }
  }

  function escapeHTML(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Parse the HTML string using DOMParser
  // const parser = new DOMParser();
  // const doc = parser.parseFromString(fullString, 'text/html');
  // const rootElement = doc.body.firstChild;
  const rootElement = getRootElement(fullString);
  const element = createElement(
    buildStructure(rootElement, functions, elements),
    trackedStates
  );

  return element;
}

function getRootElement(fullString) {
  const parser = new DOMParser();
  let doc;

  // Check if the string starts with a table-related element
  if (fullString.trim().match(/^<(tr|td|th|tbody|thead|tfoot)/i)) {
    // Wrap in a table structure for effective parsing, table elements are restrictive if not used in a table context
    doc = parser.parseFromString(`<table>${fullString}</table>`, 'text/html');
    return doc.querySelector('table').firstElementChild;
  } else {
    // For other elements, we parse normally
    doc = parser.parseFromString(fullString, 'text/html');
    return doc.body.firstElementChild;
  }
}

/**
 * Recursively builds an abstract syntax tree (AST) structure from a DOM element.
 *
 * @param {HTMLElement | any} element - The DOM element to process.
 * @param {Array} functions - List of functions to associate with the element.
 * @param {Array} elements - List of elements to associate with the element.
 * @returns {Object} The AST structure representing the element.
 */
function buildStructure(element, functions, elements) {
  // if element is text
  if (element.nodeType === Node.TEXT_NODE) {
    return {
      type: '#text',
      content: element.textContent.trim(),
      attributes: {},
      children: [],
      elements: elements,
    };
  } else if (!element?.tagName) {
    console.error('Invalid element:', element);
    return null;
  }
  const tag = element.tagName.toLowerCase();
  const attributes = extractAttributes(element, functions, elements);
  const content = Array.from(element.childNodes)
    .filter((node) => node.nodeType === Node.TEXT_NODE)
    .map((node) => node.textContent.trim())
    .join('');

  const children = Array.from(element.childNodes)
    .filter((node) => node.nodeType === Node.ELEMENT_NODE)
    .map((node) => buildStructure(node, functions, elements));

  return {
    type: tag,
    content: content,
    attributes: attributes,
    children: children,
    elements: elements,
  };
}

/**
 * Creates an HTML element from an AST structure.
 *
 * @param {Object} structure - The AST structure representing the element.
 * @returns {HTMLElement | Text} The created HTML element.
 */
export function createElement(structure, trackedStates) {
  const { type, content, attributes, children, elements } = structure;

  // Handle text nodes
  if (type === '#text') {
    return document.createTextNode(content);
  }

  // Create the element
  const element = document.createElement(type);

  // Set a unique _id attribute if not already present
  if (!element.hasAttribute('_id')) {
    const uniqueId = generateUniqueId('ELEMENT');
    element.setAttribute('_id', uniqueId);
    if (trackedStates && trackedStates.size > 0) {
      trackedStates.forEach((s) => (s.elementInDom = uniqueId));
    }
  }

  // Set the content
  if (content) {
    element.textContent = content;
  }

  // Apply the attributes
  for (const [key, value] of Object.entries(attributes)) {
    if (key === 'ref') {
      let refExists = refElements.find((r) => r.ref === value);

      if (!refExists) {
        refElements.push({
          ref: value,
          element: element,
        });
      } else {
        refElements = refElements.filter((r) => r.ref !== value);
        refElements.push({
          ref: value,
          element: element,
        });
      }
    }
    if (key.startsWith('on')) {
      const eventType = key.slice(2).toLowerCase();
      if (eventType === 'change') {
        element.addEventListener('input', value);
      } else {
        element.addEventListener(eventType, value);
      }
    } else {
      element.setAttribute(key, value);
    }
  }

  // Recursively create and append child elements
  if (children) {
    children.forEach((child) => {
      const childElement = createElement(child);
      element.appendChild(childElement);
    });
  }

  // Replace placeholders with actual elements
  Array.from(element.querySelectorAll('div[_id]')).forEach((placeholder) => {
    const id = placeholder.getAttribute('_id');
    const elementPlaceholder = elements.find((e) => e.name === id);
    if (elementPlaceholder) {
      placeholder.replaceWith(elementPlaceholder.element);
    }
  });

  return element;
}

/**
 * Extracts attributes and their values from a DOM element.
 *
 * @param {HTMLElement} element - The DOM element to process.
 * @param {Array} functions - List of functions to associate with the element.
 * @param {Array} elements - List of elements to associate with the element.
 * @returns {Object} An object representing the element's attributes.
 */
function extractAttributes(element, functions, elements) {
  const attributes = {};
  Array.from(element.attributes).forEach((attr) => {
    const attrValue = attr.value.trim();
    const functionPlaceholder = functions.find((f) => f.name === attrValue);
    if (functionPlaceholder) {
      attributes[attr.name] = functionPlaceholder.fn;
    } else {
      const elementPlaceholder = elements.find((e) => e.name === attrValue);
      if (elementPlaceholder) {
        attributes[attr.name] = elementPlaceholder.name;
      } else {
        attributes[attr.name] = attr.value;
      }
    }
  });
  return attributes;
}

/**
 * Makes a component reactive by tracking state changes and updating the DOM accordingly.
 *
 * @param {Function} htmlFn - A function that returns the HTML structure of the component.
 *                            The function should reference reactive states which trigger re-renders.
 * @returns {HTMLElement} The DOM element or structure generated by the provided HTML function.
 *
 * @example
 * // Define a component using reactive state
 * export default function SomeComponent() {
 *   const [userName, setUserName] = useState('Kizz');
 *
 *   const SomeElement = () => html`
 *     <div>
 *       <h1>${userName}</h1>
 *       <input
 *         type="text"
 *         value="${userName}"
 *         onChange="${(e) => setUserName(event.target.value)}" />
 *     </div>`;
 *
 *   return reactive(SomeElement);
 * }
 */
export function reactive(htmlFn) {
  const dom = htmlFn();
  if (trackedStates && trackedStates.size > 0) {
    trackedStates.forEach((state) => {
      state.subscribe(() => {
        let target = document.querySelector(`[_id="${state.elementInDom}"]`);
        let newElement = htmlFn();
        if (target) {
          updateDom(target, newElement);
        } else {
          console.error('component not found when re-rendering!');
        }
      });
    });
  }
  return dom;
}

/**
 * updates the DOM using morphdom.
 *
 * @param {HTMLElement | Element} fromNode - The source DOM node to be updated.
 * @param {HTMLElement | Element} toNode - The target HTML DOM node representing the new content.
 * @param {Object} [options={}] - Optional configuration object to enable/disable specific morphdom options.
 */
function updateDom(fromNode, toNode, options = {}) {
  // Default options
  const defaultOptions = {};

  // Merge default options with custom options
  const finalOptions = { ...defaultOptions, ...options };

  // Perform the DOM update
  morphdom(fromNode, toNode, finalOptions);
}

/**
 * Renders a list of items using the provided render function.
 *
 * @param {Object} props - The props object for the List component.
 * @param {string} props.ref - The reference to the target element where the list should be rendered.
 * @param {any[] | Object} props.items - The array of items to be rendered in the list.
 * @param {function} props.render - The function to render each item in the list. It should return a valid html element.
 * @returns {Object} - An object containing metadata about the list, including the type, reference, unique ID, and render function, this is used internally to render the list after the initial render.
 */
export function List(props) {
  let list_id = generateUniqueId('LIST');
  const { ref, items, render } = props;
  isRenderingList = true;

  const renderList = (target) => {
    if (target) {
      let _items = items;
      if (items.value) {
        _items = items.value;
        // trackedStates.add(items);
        // items.subscribe(() => {
        //   console.log('sub');
        //   // renderList(target);
        // });
        // console.log('tracked', trackedStates);
      }
      _items.forEach((item, index) => {
        const childElement = render({ item: item, index: index });
        target.innerHtml = '';
        target.appendChild(childElement);
      });
      isRenderingList = false;
    } else {
      console.error('ref binding element not found when list!');
    }
  };

  return {
    type: 'LIST',
    ref: ref,
    id: list_id,
    fn: renderList,
  };
}

function _getRef(ref) {
  let target = document.querySelector(`[ref="${ref}"]`) || null;
  !target && console.error(`ref not found: ${ref}`);
  return target;
}

/**
 * Retrieves the DOM element referenced by the provided `ref` string.
 *
 * @param {string} ref - The reference string to the target DOM element.
 * @returns {HTMLElement|null} - The DOM element if found, or `null` if not found.
 */
export function getRef(ref) {
  let target = null;
  refElements.forEach((r) => {
    if (r.ref === ref) {
      target = r.element;
    }
  });
  !target && console.error(`ref not found: ${ref}`);
  return target;
}

function init() {
  // render lists
  window.addEventListener('DOMContentLoaded', () => renderLists());
}

function renderLists() {
  refs.forEach((ref) => {
    if (ref.type === 'LIST') {
      let target = _getRef(ref.ref);
      if (target) {
        ref.fn(target);
      }
    }
  });
  // remove all list placeholders
  Array.from(document.querySelectorAll('div[list]')).forEach((placeholder) => {
    placeholder.remove();
  });
}

//  renderLists for initial render
init();
