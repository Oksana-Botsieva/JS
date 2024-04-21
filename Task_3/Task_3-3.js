// Задача 3.3.1
// Дан массив со словами. Удалите из него слова, состоящие более чем из трех символов.

let arr = ['hello', 'hey', 'pop', 'ror','word'];

const deleteWord = arr => {
    arr = arr.filter(item => item.length <= 3)
    return arr;
}
console.log(deleteWord(arr))

// Задача 3.3.2
/*Дано некоторое число:

    1357
Проверьте, что все цифры этого числа являются нечетными.*/

const number = 1357;

const allOddDigits = num => {

    const numString = num.toString();
    for (let i = 0; i < numString.length; i++) {
        if (parseInt(numString[i], 10) % 2 === 0) {
            return false;
        }
    }
    return true;
};

console.log(allOddDigits(number));



// Задача 3.3.3
/*Дано некоторое слово:

    'abcba'
Проверьте, что это слово читается одинаково с любой стороны.*/

let word = 'abcba';

const backWord = word => {
    const reverseWord = word.split('').reverse().join('');

    return word === reverseWord;
}

console.log(backWord(word))


/*
Задача 3.3.4
Дан массив:

Найдите сумму элементов этого массива.*/

let array = [
    [
        [11, 12, 13],
        [14, 15, 16],
        [17, 17, 19],
    ],
    [
        [21, 22, 23],
        [24, 25, 26],
        [27, 27, 29],
    ],
    [
        [31, 32, 33],
        [34, 35, 36],
        [37, 37, 39],
    ],
]

const sumArray = array => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            for (let k = 0; k < array[i][j].length; k++) {
                sum += array[i][j][k];
            }
        }
    }

    return sum;
}

console.log(sumArray(array))