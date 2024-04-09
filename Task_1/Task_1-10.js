// Задача 1.10.1
// Заполните массив случайными числами из промежутка от 1 до 100.

let arrNumber = [];
let length = 100;

for (let i = 0; i< length; i++) {
    let random = Math.ceil(Math.random() * 100);
    arrNumber.push(random);
}
console.log(arrNumber)


// Задача 1.10.2
/*Дано некоторое число:

    12345
Выведите в консоль все его символы с конца.*/

let number = 12345;
let numberStr = number.toString();

for (let i = numberStr.length - 1; i >= 0; i--) {
    console.log(numberStr[i]);
}

// Задача 1.10.3
/*Дан некоторый массив, например, вот такой:

    [1, 2, 3, 4, 5, 6]
По очереди выведите в консоль подмассивы из двух элементов нашего массива:

    [1, 2]
    [3, 4]
    [5, 6]*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array.length; i += 2) {
    if (i + 1 < array.length) {
        let subArray = [array[i], array[i + 1]];
        // console.log(subArray);
    }
}

// Задача 1.10.4
/*
Даны два массива:

    let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Слейте эти массивы в новый массив:

    [1, 2, 3, 4, 5, 6]*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let newArr = arr1.concat(arr2);
console.log(newArr)