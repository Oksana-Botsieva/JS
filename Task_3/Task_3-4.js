// Задача 3.4.1
// Выведите в консоль все числа в промежутке от 10 до 1000, у которых первая цифра четная.

const checkPenultimateDigit = () => {

    for (let i = 10; i <= 1000; i++) {
        let numString = i.toString();

        let firstDigit = numString[0];
        if (firstDigit % 2 === 0) {
            console.log(i);
        }
    }
}

// checkPenultimateDigit()


// Задача 3.4.2
/*Дан некоторый массив, например, вот такой:

    [1, 2, 3, 4, 5, 6]
Поменяйте местами пары элементов этого массива:

    [2, 1, 4, 3, 6, 5]*/

let array = [1, 2, 3, 4, 5, 6]
function swapPairs(array) {
    for (let i = 0; i < array.length - 1; i += 2) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
    }
    return array;
}

const result = swapPairs(array);
console.log(result)


// Задача 3.4.3
/*
Дан следующий объект:
Найдите сумму элементов этого объекта.*/

let obj = {
    1: {
        1: 11,
        2: 12,
        3: 13,
    },
    2: {
        1: 21,
        2: 22,
        3: 23,
    },
    3: {
        1: 24,
        2: 25,
        3: 26,
    },
}

const sumDigitObj = obj => {
    let sum = 0;
    for (let key1 in obj) {
        let innerObj = obj[key1];
        for (let key2 in innerObj) {
            sum += innerObj[key2];
        }
    }
    return sum;
}

console.log(sumDigitObj(obj))
