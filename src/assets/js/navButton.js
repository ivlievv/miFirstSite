'use strict';

let nav = document.querySelector('.navigation');
let btn = document.querySelector('.navButton');


btn.onclick = checkBtnClass;

function checkBtnClass() {
    btn.classList.toggle('closeNav');
    nav.classList.toggle('open');
}

const navMenu = document.getElementsByClassName('navMenu')[0];
navMenu.onclick = function (e) {
    if (e.target.tagName === 'A') {
        checkBtnClass();
    }
};