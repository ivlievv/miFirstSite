'use strict';

let header = document.querySelector('#fixedMenu');

document.body.onscroll = myFunction;

function myFunction() {
    if (window.pageYOffset >= 50) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}