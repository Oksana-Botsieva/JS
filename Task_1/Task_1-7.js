// Задача 1.7.1
/*
Дана строка:
    'abcde'
Получите массив букв этой строки.*/

let str = "abcde";

const arrStr = str.split('');

// console.log(arrStr)


// Задача 1.7.2
/*
Дано некоторое число:
    12345
Получите массив цифр этого числа.*/
let num = 12345

const arrNum = String(num).split('')

// console.log(arrNum)


// Задача 1.7.3
/*Дано некоторое число:
    12345
Переверните его:
    54321*/

let numbers = 12345

const numReverse = + String(numbers).split('').reverse().join('');

console.log(numReverse)


// Задача 1.7.4
/*
Дано некоторое число:
    12345
Найдите сумму цифр этого числа.*/

let nums = 555;

const sumNum = String(nums).split('').reduce((accumulator, currentValue) => {
    return accumulator + +currentValue ;
}, 0);

console.log(sumNum)
