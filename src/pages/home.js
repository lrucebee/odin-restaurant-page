import Image1 from '../assets/images/hero1.jpg';
import Image2 from '../assets/images/hero2.jpg';
import { selectPage } from '../components/nav';
import menuPage from '../pages/menu';

const homePage = document.createElement('div');
homePage.classList.add('home');

const heroImage1 = new Image();
heroImage1.src = Image1;
heroImage1.classList.add('span-y');

const heroImage2 = new Image();
heroImage2.src = Image2;

const menuLink = document.createElement('button');
menuLink.classList.add('menu-link');
menuLink.innerText = 'View Menu';
menuLink.addEventListener('click', () =>
  selectPage.call(document.querySelector('.Menu'), menuPage)
);

homePage.append(heroImage1, heroImage2, menuLink);

export { homePage as default };
