import { render } from '../rendering/index.js';

class ZLink extends HTMLElement {
  connectedCallback() {
    this.addEventListener('click', this._handleClick);
    this.style.cursor = 'pointer';
  }

  disconnectedCallback() {
    this.removeEventListener('click', this._handleClick);
  }

  _handleClick = (e) => {
    e.preventDefault();
    const path = this.getAttribute('to') || '/';
    const target = this.getAttribute('target');
    const event = new CustomEvent('z-navigate', {
      bubbles: true,
      detail: { path, target },
    });
    this.dispatchEvent(event);
  };
}

if (!customElements.get('z-link')) {
  customElements.define('z-link', ZLink);
}

export function Router(config = {}) {
  const parent = config.parent || document.body;
  const routes = config.routes || [];
  const initialDelay = config.initialDelay || 0;
  let currentRoute = null;

  const findMatchingRoute = (urlPath) => {
    // Remove leading slash if present
    const path = urlPath.startsWith('/') ? urlPath : `/${urlPath}`;

    // Check if the path ends with 'index.html' and route to home if it does
    if (path.endsWith('/index.html')) {
      return routes.find((r) => r.route === '/');
    }

    const exactMatch = routes.find((r) => r.route === path);
    if (exactMatch) return exactMatch;

    const wildcardRoute = routes.find((r) => r.route === '/*');
    return wildcardRoute;
  };

  const navigate = (urlPath, options = {}) => {
    const renderTarget = options.target || parent;
    const route = findMatchingRoute(urlPath);
    const renderComponent = options.component || route?.component;

    if (renderComponent) {
      let navigatePath = urlPath.endsWith('/index.html') ? '/' : urlPath;
      navigatePath = navigatePath.startsWith('/')
        ? navigatePath
        : `/${navigatePath}`;

      if (options.replaceState) {
        history.replaceState({}, '', navigatePath);
      } else {
        history.pushState({}, '', navigatePath);
      }
      render(renderTarget, renderComponent);
      currentRoute = navigatePath;
    } else {
      console.error('Z Router: No component found for route:', urlPath);
    }
  };

  const handleNavigation = (e) => {
    const { path, target } = e.detail;

    toggleActiveLink(e.target);

    if (target) {
      const targetElement = document.getElementById(target);
      if (targetElement) {
        navigate(path, { target: targetElement });
      } else {
        console.error('Z Router: No target element found for route:', path);
      }
    } else {
      navigate(path);
    }
  };

  const toggleActiveLink = (activeLink) => {
    parent.querySelectorAll('z-link').forEach((link) => {
      link.classList.toggle('active', link === activeLink);
    });
  };

  const attachLinkListeners = () => {
    parent.addEventListener('z-navigate', handleNavigation);
  };

  const handlePopState = () => {
    const path = window.location.pathname + window.location.search;
    navigate(path, { replaceState: true });
  };

  const handleInitialRoute = () => {
    const path = window.location.pathname + window.location.search;
    navigate(path, { replaceState: true });
  };

  const initRouter = () => {
    if (routes.length === 0) {
      console.error('Z Router: No routes configured');
      return;
    }

    attachLinkListeners();
    window.addEventListener('popstate', handlePopState);

    handleInitialRoute();
  };

  const getParam = (param) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has(param) ? urlParams.get(param) : null;
  };

  // Initialize router
  if (initialDelay > 0) {
    setTimeout(initRouter, initialDelay);
  } else if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouter);
  } else {
    initRouter();
  }

  return {
    history: window.history,
    location: window.location,
    goTo: navigate,
    goBack: () => window.history.back(),
    goForward: () => window.history.forward(),
    getParam,
    reloadRouter: initRouter,
  };
}
