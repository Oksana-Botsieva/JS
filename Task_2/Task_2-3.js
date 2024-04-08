// Задача 2.3.1;
// Даны два слова. Проверьте, что последняя буква первого слова совпадает с первой буквой второго слова.
let word1 = 'hello'
let word2 = 'open'
const result = compareLetter(word1, word2)
function compareLetter (word1, word2) {
    let lastLetterWord = word1[word1.length -1];
    let firstLetterWord = word2[0];

    return lastLetterWord === firstLetterWord;
}

// console.log(result);



// Задача 2.3.2;
// Дана некоторая строка. Найдите позицию третьего нуля в строке.

let str = '101011101001'

let count = 0;
let index;

for ( i = 0; i < str.length; i++) {
    if (str[i] === '0') {
        count++;
        if (count === 3) {
            index = i;
            break;
        }
    }
}

console.log(index)
// Задача 2.3.3;
/*
Даны числа, разделенные запятыми:'12,34,56'
Найдите сумму этих чисел.*/

const strNum = "12,34,56";
const sumStrNum = strNum.split(',').reduce((accumulator,currentValue) => {
    return accumulator + parseInt(currentValue);
}, 0)
// console.log(sumStrNum)



// Задача 2.3.4;
/*
Дана дата в следующем формате:

    '2025-12-31'
Преобразуйте эту дату в следующий объект:

{
    year: '2025',
        month: '12',
    day: '31',
}*/

let dateString = '2025-12-31';
let [year, month, day] = dateString.split('-');

let dateObject  = {
    year:year,
    month:month,
    day:day
}

// console.log(dateObject)