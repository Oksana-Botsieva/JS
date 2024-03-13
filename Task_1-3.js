// Задача 1.3.1
/*
Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
*/
const strLenght = (str) => (str.length > 1) ? (str.charAt(str.length - 2)) : undefined;

// console.log(strLenght("Sdlfvk"))

// Задача 1.3.2
/*Даны два целых числа. Проверьте, что первое число без остатка делится на второе.*/

const division = (number1,number2) => (number1 % number2 === 0);

// console.log(division(5,7))

