import layout from './components/layout';

import 'the-new-css-reset/css/reset.css';
import './styles/main.css';

const content = document.querySelector('#content');

content.append(...layout);
