import {
  render as _render,
  html,
  reactive,
  css,
  List,
  getRef,
} from './src/rendering/index.js';
import { useSuspense } from './src/hooks/index.js';
import {
  useEffect,
  useState,
  radio,
  createStore,
  useStore,
} from './src/store/index.js';
import { Router } from './src/routing/router.js';
import {
  setConfig,
  setBearerToken,
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
} from './src/fetch/index.js';

let _router = null;
let _parentElement = null;

const render = (parentElement = null, routes = [], initialDelay = 0) => {
  if (!parentElement) {
    console.error("Root or parent element can't be empty, it is required!");
    return;
  }
  if (routes.length === 0) {
    console.error("Routes can't be empty, at least one is required!");
    return;
  }

  // Find the initial route and render it
  let initialRoute = routes.find((r) => r.route === '/');
  _render(parentElement, initialRoute.component);

  if (parentElement && routes.length > 0) {
    _parentElement = parentElement;
    // Create a new router instance
    _router = Router({
      routes: routes,
      parent: parentElement,
      initialDelay: initialDelay,
    });
  }

  return _router;
};

const useRouter = () => _router;
const getRootElement = () => _parentElement;

export {
  render,
  html,
  List,
  getRef,
  reactive,
  css,
  useEffect,
  useState,
  createStore,
  useStore,
  radio,
  useRouter,
  getRootElement,
  useSuspense,
  setConfig,
  setBearerToken,
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
};
