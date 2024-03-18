// Задача 1.6.1

// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
let numbers = [1,5,5,28,15];

const sumSquareNum = numbers.map(num => num * num).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// console.log(sumSquareNum);

// Задача 1.6.2
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.

const sumRootNum = numbers.map(num => Math.sqrt(num)).reduce((accumulator, currentValue) => {
     return accumulator + currentValue;
}, 0) ;

// console.log(sumRootNum)


// Задача 1.6.3
// Дан массив с числами. Найдите сумму положительных элементов этого массива.

let sumPositivNum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        sumPositivNum += numbers[i];
    }
}
// console.log(sumPositivNum)


// Задача 1.6.3
// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && numbers[i] < 10) {
        sum += numbers[i];
    }
}

// console.log(sum);
