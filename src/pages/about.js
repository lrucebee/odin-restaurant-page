import bakeryImgSrc from '../assets/images/bakery.jpg';

const aboutPage = document.createElement('div');
aboutPage.classList.add('about');

const aboutHeading = document.createElement('h3');
aboutHeading.textContent = 'Lambrous Bakery';

const aboutBody = document.createElement('div');
aboutBody.innerHTML = `
  <p>Pariatur enim incididunt amet nulla excepteur laboris laboris tempor. Magna aliqua incididunt exercitation proident dolor occaecat minim id aute et laboris deserunt. Adipisicing minim voluptate excepteur excepteur sit Lorem consequat cupidatat proident in nisi esse nulla. Sint Lorem quis ad reprehenderit amet deserunt ullamco Lorem est proident cupidatat incididunt consectetur adipisicing. Sint cillum fugiat laboris incididunt. Ad nostrud duis culpa proident elit nulla commodo ut consectetur esse commodo duis aute ex. Aute culpa aliquip velit amet cillum anim ullamco reprehenderit est pariatur sint sint.</p>
  <p>Amet esse pariatur ut laborum dolore est laborum officia. Do amet ipsum pariatur minim proident excepteur. Eiusmod ipsum do amet labore veniam reprehenderit exercitation. Aliqua eu sit deserunt ipsum labore enim duis tempor aliqua nulla.</p>
  <p>Duis non do duis consectetur labore aliqua sint enim sit laboris id. Officia sunt ullamco laborum labore ea pariatur cillum mollit est ullamco irure anim ipsum tempor. Excepteur amet dolore sint proident Lorem mollit ad. Commodo adipisicing laboris occaecat minim anim aute nostrud eu ex consectetur consequat dolore. <p>Esse sint commodo elit do aliquip id enim ea ex duis amet anim in.</p>
  Adipisicing commodo aliqua do voluptate officia ad commodo excepteur deserunt esse do. Reprehenderit non sunt voluptate excepteur eu consectetur dolore dolore fugiat ex amet. Aute anim laboris et magna quis pariatur excepteur aute laboris excepteur id.</p>
`;

const bakeryImg = new Image();
bakeryImg.src = bakeryImgSrc;

aboutPage.append(aboutHeading, aboutBody, bakeryImg);

export { aboutPage as default };
