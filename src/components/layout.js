import header from './header';
import nav from './nav';
import footer from './footer';
import homePage from '../pages/home';

const mainEl = document.createElement('main');
mainEl.appendChild(homePage);

export function renderPage(page) {
  mainEl.innerHTML = '';
  mainEl.appendChild(page);
}

const layoutNodes = [header, nav, mainEl, footer];

export { layoutNodes as default };
