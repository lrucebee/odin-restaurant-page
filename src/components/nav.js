import homePage from '../pages/home';
import menuPage from '../pages/menu';
import aboutPage from '../pages/about';
import { renderPage } from './layout';

const navEl = document.createElement('nav');
const navItems = [
  { text: 'Home', pageEl: homePage, current: true },
  { text: 'Menu', pageEl: menuPage },
  { text: 'About', pageEl: aboutPage },
];

navItems.forEach(({ text, pageEl, current }) => {
  const linkEl = document.createElement('button');
  linkEl.textContent = text;
  linkEl.classList.add('nav-link', text);
  if (current) linkEl.classList.add('current');

  linkEl.addEventListener('click', selectPage.bind(linkEl, pageEl));

  navEl.appendChild(linkEl);
});

export function selectPage(page) {
  if (this.classList.contains('current')) return;

  const linkEls = document.querySelectorAll('.nav-link');
  linkEls.forEach((link) => {
    if (this === link) {
      link.classList.add('current');
      return;
    }
    link.classList.remove('current');
  });

  renderPage(page);
}

export { navEl as default };
