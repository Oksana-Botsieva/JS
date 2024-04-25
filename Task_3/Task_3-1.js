// Задача 3.1.1
// Дано некоторое число. Проверьте, что цифры этого числа расположены по возрастанию.

let number = 2568;

const ascendingNumber = number => {
    let array = number.toString().split('');
    let isIncreasing = true;

    for (let i = 1; i < array.length; i++) {
        if (array[i] <= array[i - 1]) {
            isIncreasing = false;
            break;
        }
    }

    return isIncreasing;
}

// console.log(ascendingNumber(number))


// Задача 3.1.2
/*Дан массив:

    [1, '', 2, 3, '', 5]
Удалите из массива все пустые строки.*/


let arr = [1, '', 2, 3, '', 5]


const emptyString = arr => {

    arr = arr.filter(item => item !== '');

    return arr;
}
// console.log(emptyString(arr))


// Задача 3.1.3

/*Дан массив:

    [
        [2, 1, 4, 3, 5],
        [3, 5, 2, 4, 1],
        [4, 3, 1, 5, 2],
    ]
Отсортируйте элементы в каждом подмассиве.*/

let array = [
    [2, 1, 4, 3, 5],
    [3, 5, 2, 4, 1],
    [4, 3, 1, 5, 2],
]

const arraySort = array => {

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].sort();
    }
    return array
}

// console.log(arraySort(array))



// Задача 3.1.4
/*
Даны два массива:

    let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];
Удалите из большего массива лишние элементы с конца так, чтобы длины массивов стали одинаковыми.*/

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

const deleteLength = (arr1, arr2) => {

    while (arr1.length < arr2.length) {
        arr2.pop();
    }

   return arr1.length === arr2.length;
}

console.log(deleteLength(arr1,arr2))
