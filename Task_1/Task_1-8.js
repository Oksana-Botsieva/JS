// Задача 1.8.1
// Заполните массив целыми числами от 1 до 10.

const numbers = [];

for (let i = 1; i <= 10; i++) {
    numbers.push(i);
}

// console.log(numbers);

// Задача 1.8.2
// Заполните массив четными числами из промежутка от 1 до 100.

const arr = []

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        arr.push(i)
    }
}

// console.log(arr);


// Задача 1.8.3
/*Дан массив с дробями:
    [1.456, 2.125, 3.32, 4.1, 5.34]
Округлите эти дроби до одного знака в дробной части.*/

let arrNum = [1.456, 2.125, 3.32, 4.1, 5.34]

const arrNew = arrNum.map(num => num.toFixed(1));

console.log(arrNew)
