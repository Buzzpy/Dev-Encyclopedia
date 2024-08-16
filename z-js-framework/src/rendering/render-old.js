// Todo: more helper fucntions to simplify working with dom elements or components
// Todo: Look Into Dom Mutation Observers - we can derive compoent mounted, unmounted and updated utilities to wire up into our reactive state system

// import { print } from '../utils/utilities.js';

// code for handling rendering of templates and ui
const componentsDirectory = './components';
/**
 * @type function - Z Js Function
 * @description A fetch function that fetches given component from components directory
 * @param {string} componentName - the name of the component to fetch
 * @returns  component content as html
 */
export async function fetchComponentContent(componentName, data) {
  // const response = await fetch(`${componentsDirectory}/${componentName}.html`);
  const response = await fetch(`${componentsDirectory}/${componentName}`);

  if (response.ok) {
    let extract = await response.text();
    let markup = evalComponentContent(extract, data);
    // let markup = transformToTemplateLiteral(extract);

    // console.log('markup', markup);

    if (markup) {
      let fragment = document.createElement('div');
      fragment.innerHTML = markup;
      let template = fragment.querySelector('template');
      if (template) {
        let content = document.importNode(template.content, true);
        return content;
      }
    }
    return null;
  } else {
    console.log(
      `something happened when trying to get the component: ${componentName}`
    );
  }
}

function tagTemplateLiteral(strings, ...values) {
  // Create a new template element
  let template = document.createElement('template');

  // Interpolate the strings and values to create a new HTML structure
  let html = strings.reduce((result, string, i) => {
    return result + string + (values[i] !== undefined ? values[i] : '');
  }, '');

  // Set the innerHTML of the template to the new HTML structure
  template.innerHTML = html;

  // Return the content of the template
  return template.content;
}

function transformToTemplateLiteral(templateHTML) {
  // Replace {data with ${data
  const transformedHTML = templateHTML.replace(/{data/g, '${data');

  // Enclose the entire string in backticks
  return `\`${transformedHTML}\``;
}

export async function render(parentElement, componentName, data) {
  let newContent = await fetchComponentContent(componentName, data);
  if (newContent) {
    parentElement.appendChild(newContent);
  }

  // Add event listeners to the elements with the data-onclick attribute
  parentElement.querySelectorAll('[data-action]').forEach((element) => {
    let event = element.getAttribute('data-action');
    let id = element.getAttribute('data-id');
    if (event && id) {
      element.addEventListener('click', () => data[event](id));
    }
  });
}

function evalComponentContent(content, data) {
  // Regular expression to match placeholders like {data.todoItem.completed}
  const regex = /{([^}]+)}/g;

  // Replace placeholders with actual values from the data object
  return content.replace(regex, (match, placeholder) => {
    // Remove 'data.' prefix and split the placeholder into keys
    const keys = placeholder.replace('data.', '').split('.');

    // Traverse the data object to find the value corresponding to the keys
    let value = data;
    for (const key of keys) {
      if (value.hasOwnProperty(key)) {
        value = value[key];
      } else {
        // If the key doesn't exist in the data object, return the original placeholder
        return match;
      }
    }

    return value;
  });
}

/**
 * @type function - Z Js helper function
 * @description helper function that creates a new html element and returns it
 * @param {string} tagName
 * @param {object} Attributes
 * @returns  a newly created html element or component
 */
export function createComponent(tagName, Attributes) {
  let component = document.createElement(tagName);

  for (let key in Attributes) {
    component.setAttribute(key, Attributes[key]);
  }

  return component;
}

export function replaceComponent(oldComponent, newComponent) {
  oldComponent.parentNode.replaceChild(newComponent, oldComponent);
}

export function removeComponent(component) {
  component.parentNode.removeChild(component);
}

export function updateComponent(component, newContent) {
  component.innerHTML = newContent;
}

/**
 * @type function - Z Js helper function
 * @description helper function that takes parent element and returns an array of it's children
 * @param {Element} component
 * @returns an array of all component's child elements
 * @example let optionsArray = getChildren(selectElement);
 */
export function getChildren(component) {
  let childernArray = Array.from(component.children);

  return childernArray;
}
