'use strict';

import { Layout } from './components/layout.js';
import About from './pages/about.js';
import BuildersNote from './pages/builders-note.js';
import Home from './pages/home.js';
import Sponsor from './pages/sponsor.js';
import { render } from './z-js-framework/dist/z.js';

const routes = [
  {
    route: '/',
    component: Layout,
  },
  {
    route: '/home',
    component: Home,
  },
  {
    route: '/about',
    component: About,
  },
  {
    route: '/builders-note',
    component: BuildersNote,
  },
  {
    route: '/sponsors',
    component: Sponsor,
  },
];

const root = document.querySelector('#app');

const router = render(root, routes);
router.goTo('/');
