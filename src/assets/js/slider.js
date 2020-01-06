'use strict';

let btnPrev = document.querySelector('#sliderPhoto .buttonsSlider .buttonPrev');
let btnNext = document.querySelector('#sliderPhoto .buttonsSlider .buttonNext');

let images = document.querySelectorAll('#sliderPhoto .reviewsPhoto img');
let i = 0;

btnPrev.onclick = function () {
    images[i].style.display = 'none';
    i--;
    if (i < 0){
        i = images.length -1;
    }

    images[i].style.display = 'block';
};

btnNext.onclick = function () {
    images[i].style.display = 'none';
    i++;
    if (i >= images.length){
        i = 0;
    }

    images[i].style.display = 'block';
};



