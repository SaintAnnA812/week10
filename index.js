// функции
// let age = prompt('Сколько тебе лет?', 30);
// alert(`Тебе ${age} лет!`)

// let yes = confirm('Продолжим программировать?');
// alert('Вы выбрали' + yes);

/*function showMessage() {
    alert('Привет всем!');
}*/

/*function sum(a, b) {
    return a + b;
}*/
//alert(sum(5, 6))

/*function y(x) {
    return x ** 2;
}*/
//let result = y(2);
//alert(result);

/*function showMessageFromUser(name = 'Аноним', message = 'пустой текст') {
    //alert(name + ':' + message);
    return `${name}: ${message}`;
}
//alert(showMessageFromUser());

//объявление функций
function test(func) {
    func();
}

test(function () {
    console.log('Привет!');
});

(function (a, b) {
    console.log(a + b);
})(2, 5);

console.log(function (a, b) {
    return a + b;
}(2, 5));


function sum1(a, b) {
    return a + b;
}
let sum2 = function (a, b) {
    return a + b;
};
let sum3 = (a, b) => a + b;

let result = sum3(12, 10);

let y = x => x * x;

let showMessage = () => console.log('Привет!');
let name = prompt('Как тебя зовут?');

showMessage();

console.log(y(2));
console.log(result);*/

// отладка кода
function sum(a, b) {
    console.log(a, b);
    let result = a + b;
    console.log(result);
    return result;
}
let h1 = document.getElementsByTagName('h1');

console.log(sum(28, '35'));