// Задача 2.1.1
// Дана некоторая строка. Найдите позицию первого нуля в строке.
const str = '1010110'

const indStr = str.indexOf("0");
console.log(indStr)

// Задача 2.1.2
// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

for (let i = 10; i < 1000; i++) {
    let str = String(i);
    let firstDigit = parseInt(str[0]); // Получаем первую цифру
    let secondDigit = parseInt(str[1]); // Получаем вторую цифру
    if (firstDigit + secondDigit === 5) {
        // console.log(i);
    }
}

// Задача 2.1.3
// Дан массив. Удалите из него элементы с заданным значением.

let arr = [3,5,6,3,7,5,6,2,6,0,7]
let valueToRemove = 7;

for (let i = 0; i < arr.length; i++) {
 if (arr[i] === valueToRemove) {
     arr.splice(i,1);
 }}
console.log(arr);

// Задача 2.1.4;
/*Дан некоторый массив, например, вот такой:

    [1, 2, 3, 4, 5, 6]
Найдите сумму первой половины элементов этого массива.*/

let array = [1, 2, 3, 4, 5, 6];
let arrayLength = Math.ceil(array.length / 2);


const firstHalfSum = array.slice(0, arrayLength).reduce((acc, cur) => {
    return acc + cur;
});

/*
let sum = array.reduce((accumulator, currentValue, currentIndex) => {
    if (currentIndex < arrayLength) {
        return accumulator + currentValue;
    } else {
        return accumulator;
    }
},0)
*/

console.log(firstHalfSum);

