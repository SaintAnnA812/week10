//задание  1
let text = function () {
    console.log('Я учу JavaScript!');
}
text();

function text1() {
    console.log('Я учу JavaScript!');
}
text1();

let text2 = () => console.log('Я учу JavaScript!')

text2();
//задание 2
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


//задание *
let year = 2020;
if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    console.log('Високосный');
} else {
    console.log('Не високосный');
}






//let x = 2264;
//let a = 'Високосный';
//let b = 'Не високосный';

/*if (x % 4 === 0) {
    if (x % 100 === 0) {
        if (x % 400 === 0);
    } return b;
}*/
//console.log(x);

/*if (x % 4 === 0) {
    message = 'Високосный';
} else if (x % 100 === 0) {
    message = 'Високосный';
} else if (x % 400 === 0) {
    message = 'Високосный';
} else {
    message = 'Не високосный';
}
console.log(message);*/


/*let result = (x % 4 == 0) ? 'високосный' : 'не високосный';
console.log(result);

let result1 = (x % 100 == 0) ? 'високосный' : 'не високосный';
console.log(result1);

let result2 = (x % 400 == 0) ? 'високосный' : 'не високосный';
console.log(result2);*/