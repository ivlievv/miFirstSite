import './assets/css/reset.css';
import './assets/scss/layout.scss';
import './assets/scss/styles.scss';
import './assets/scss/content.scss';
import './assets/scss/imagesAnimation.scss';

fetch('./data/employees.json')
    .then(response => response.json())
    .then(console.log)
    .catch(console.error);

