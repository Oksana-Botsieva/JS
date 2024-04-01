// Задача 2.4.1;
// Дана некоторая строка с буквами и цифрами. Получите позицию первой цифры в этой строке.

let str = 'mdn54ngkldr';

let strDigit = str.search(/\d/);
console.log(strDigit);

// Задача 2.4.2;
// Дан объект с ключами и значениями. Запишите в первый массив ключи объекта, а во второй - значения.

let object = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
}

let arrKey = Object.keys(object);
let arrValue = Object.values(object);

console.log(arrKey,arrValue);


// Задача 2.4.3;
// Дано число. Выведите в консоль количество четных цифр в этом числе.

let number = 456788;
let strNumber = number.toString();
let count = 0;

for (let i = 0; i < strNumber.length; i++) {
    let digit = parseInt(strNumber[i]);
    if (digit % 2 === 0) {
        count++;
    }
}

console.log(count)


// Задача 2.4.4;
/*
Дана некоторая строка:'abcde'
Переведите в верхний регистр все нечетные буквы этой строки. В нашем случае должно получится следующее:
    'AbCdE'*/

let string = 'abcde';
let result = '';

for (let i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
        result += string[i].toUpperCase();
    } else {
        result += string[i];
    }
}

console.log(result);



// Задача 2.4.5;
/*
Дана некоторая строка со словами:

    'aaa bbb ccc'
Сделайте заглавным первый символ каждого слова в этой строке. В нашем случае должно получится следующее:

    'Aaa Bbb Ccc'*/

let strWord = 'aaa bbb ccc';
let strWordArr = strWord.split(' ');
console.log(strWordArr)