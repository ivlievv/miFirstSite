'use strict';

let nav = document.querySelector('.navigation');
let btn = document.querySelector('.navButton');


btn.onclick = checkBtnClass;

function checkBtnClass() {
    btn.classList.toggle('closeNav');
    nav.classList.toggle('open');
}