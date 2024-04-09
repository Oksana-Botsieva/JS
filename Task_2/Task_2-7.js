// Задача 2.7.1
/*ана некоторая строка:
    'a bc def ghij'
Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
    'A BC DEF ghij'*/

const str = 'a bc def ghij';

function symbolCase(str) {
    const arrStr = str.split(' ');

    arrStr.forEach(function (word,index,array) {
        if (word.length <= 3) {
            array[index] = word.toUpperCase();
        }
    })
return arrStr.join(' ')
}

// console.log(symbolCase(str))


// Задача 2.7.2
// Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.

const symbol = "G";

function checkRegister (symbol) {
    if ( symbol === symbol.toUpperCase()) {
        return "Верхний регистр";
    } else if (symbol === symbol.toLowerCase()) {
        return 'Нижний регистр';
    } else {
      return 'не буква';
    }
}

console.log(checkRegister(symbol))

// Задача 2.7.3
/*
Дано некоторое число, например, такое:
123789
Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
    28*/


const number = 123789;

function deleteNegativeNum (number) {
    let numberString = number.toString();
    let result = '';

    for ( let i = 0; i < numberString.length; i ++) {
        const digit = parseInt(numberString[i]);
        if (digit % 2 === 0) {
            result += digit;
        }
    }
    return parseInt(result)
}

console.log(deleteNegativeNum(number))