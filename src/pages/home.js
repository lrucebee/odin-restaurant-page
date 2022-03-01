import homeImg1 from '../assets/images/hero1.jpg';
import homeImg2 from '../assets/images/hero2.jpg';
import homeImg3 from '../assets/images/hero3.jpg';
import { selectPage } from '../components/nav';
import menuPage from '../pages/menu';

const homePage = document.createElement('div');
homePage.classList.add('home');

const homeImages = [homeImg1, homeImg2, homeImg3];

homeImages.forEach((img) => {
  const imgContainer = document.createElement('div');
  const heroImg = new Image();
  heroImg.src = img;

  imgContainer.appendChild(heroImg);
  homePage.appendChild(imgContainer);
});

const linkContainer = document.createElement('div');
linkContainer.classList.add('menu-link-cont');
const menuLink = document.createElement('button');
menuLink.classList.add('menu-link');
menuLink.innerHTML = `
  <p>View</p>
  <p>Menu</p>
`;
menuLink.addEventListener('click', () =>
  selectPage.call(document.querySelector('.Menu'), menuPage)
);
linkContainer.appendChild(menuLink);

homePage.appendChild(linkContainer);

export { homePage as default };
