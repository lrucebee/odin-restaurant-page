const currDate = new Date();
const currYear = currDate.getFullYear();
const footerEl = document.createElement('footer');
footerEl.innerHTML = `
  &copy; ${currYear} 
  <a href="https://github.com/lambrous" target="_blank">Lambrous</a> | 
  <a
    href="https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page"
    target="_blank"
  >
    The Odin Project
  </a>
  
`;

export { footerEl as default };
