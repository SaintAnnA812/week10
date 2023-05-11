let text = function () {
    console.log('Я учу JavaScript!');
}
text();

function text1() {
    console.log('Я учу JavaScript!');
}
text1();

let offset = 0;
const sliderLine = document.querySelector('.slider__item');

document.querySelector('.slider-next').addEventListener('click', function () {
    offset = offset + 512;
    if (offset > 1024) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 512;
    if (offset < 0) {
        offset = 1024;
    }
    sliderLine.style.left = -offset + 'px';
});