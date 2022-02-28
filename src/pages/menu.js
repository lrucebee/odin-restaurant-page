import menu from '../data/menu';
import createMenu from '../components/menu';

const menuPage = document.createElement('div');
menuPage.classList.add('menu-page');

menu.forEach((item) => {
  const menuEl = createMenu(item);
  menuPage.appendChild(menuEl);
});

export { menuPage as default };
