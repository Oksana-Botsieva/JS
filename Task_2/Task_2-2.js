// Задача 2.2.1;
// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.

 let arrNum = [ -15, 66, -84, 44, -76]
 let arrNumNegative = []

for (i = 0; i < arrNum.length; i ++) {
 if (arrNum[i] < 0) {
  arrNumNegative.push(arrNum[i]);
 }
}
// console.log(arrNumNegative.length)


// Задача 2.2.2;
// Дан массив с числами. Оставьте в нем только положительные числа.

let arrNumPositive = []

for (i = 0; i < arrNum.length; i ++) {
 if (arrNum[i] >= 0) {
  arrNumPositive.push(arrNum[i])
 }
}
// console.log(arrNumPositive)

// Задача 2.2.3;
// Дана строка. Удалите предпоследний символ из этой строки.
 let str = 'wow'
let newStr = str.slice(0,-2) + str.slice(-1);
console.log(newStr);


// Задача 2.2.4;
/*
Дан некоторый массив, например, вот такой:

    [1, 2, 3, 4, 5, 6]
Поделите сумму первой половины элементов этого массива на сумму второй половины элементов.*/

let array = [1, 2, 3, 4, 5, 6]
let middleIndex =  Math.ceil(array.length / 2);


let sumFirstHalf = array.slice(0,middleIndex).reduce((accumulator, currentValue) => {
 return accumulator + currentValue;
}, 0);

let sumSecondHalf = array.slice(middleIndex).reduce((accumulator, currentValue) => {
 return accumulator + currentValue;
}, 0);

const divideSumArray = (sumFirstHalf / sumSecondHalf);
console.log(divideSumArray)

