export default function createMenu({ name, price, imageSrc }) {
  const menuEl = document.createElement('div');
  menuEl.classList.add('menu');

  const image = new Image();
  image.classList.add('menu-img');
  image.src = imageSrc;

  const bottomEl = document.createElement('div');
  bottomEl.classList.add('menu-bottom');
  bottomEl.innerHTML = `
    <div class="menu-info">
      <p class="menu-name">${name}</p>
      <p class="menu-price">$ ${price}</p>
    </div>
    <button class="menu-add">+</button>
  `;

  menuEl.append(image, bottomEl);

  return menuEl;
}
