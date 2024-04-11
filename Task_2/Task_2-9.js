// Задача 2.9.1
/*
Дано некоторое число:

    123456
Найдите сумму пар цифр этого числа. В нашем случае имеется ввиду следующее:

    12 + 34 + 56*/

const number = 123456;

function sumPairs (number) {
    const numberString = number.toString();
    let sum = 0;

    for (let i = 0; i < numberString.length; i+=2) {
        const pair = parseInt(numberString.slice(i, i + 2), 10);
        sum +=pair;
    }
    return sum;
}

console.log(sumPairs(number))


// Задача 2.9.2
/*Дан массив с числами:

    [1, 2, 3, 4, 5]
Выведите в консоль элементы этого массива в обратном порядке.*/


const arr = [1, 2, 3, 4, 5];

const arrReverse = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

console.log(arrReverse(arr))