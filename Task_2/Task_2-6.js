// Задача 2.6.1
// Дана некоторая строка с буквами и цифрами. Получите массив позиций всех цифр из этой строки.

const strNum = 'he346llo';
function numInd(strNum) {
    let arrNum = strNum.split("");
    console.log(arrNum);

    let arrIndNum = []

    arrNum.forEach(function (item,index) {
        if (/\d/.test(item)) {
            arrIndNum.push(index);
        }
    })
return arrIndNum;
}

// console.log(numInd(strNum))


// Задача 2.6.2
/* Дан массив с некоторыми числами, например, вот такой:
    [123, 456, 789]
Напишите код, который перевернет числа в этом массиве по следующему принципу:
    [321, 654, 987]*/

const arrNum = [123, 456, 789]

function numReverse (arrNum) {
    function reverseNumber(number) {
        return parseInt(number.toString().split('').reverse().join(''));
    }

    const reverseNumbers = arrNum.map(reverseNumber);
    return reverseNumbers;
}

// console.log(numReverse(arrNum))


// Задача 2.6.3
/*Дана некоторая строка с числом:
    '1234567'
Отделите тройки цифр пробелами, начиная с конца числа. В нашем случае должно получится следующее:
    '1 234 567'*/


const str = '1234567';

function spaceOut (str) {
    const formattedNumber = str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return formattedNumber;
}

// console.log(spaceOut(str))

// Задача 2.6.4
/*Дана некоторая строка:
    'AbCdE'
Смените регистр букв этой строки на противоположный. В нашем случае должно получится следующее:
    'aBcDe'*/

const string = 'AbCdE';

function symbolCase (string) {
    let arrString = string.split('');
    let newArrString =[]


for (let i = 0; i < arrString.length; i++) {
    let char = arrString[i]

    if (char === char.toUpperCase()) {
        newArrString.push(char.toLowerCase())
    } else {
        newArrString.push(char.toUpperCase())
    }
}
    return newArrString.join('');
}

console.log(symbolCase(string))


// Задача 2.6.5
/*
Дан некоторый массив с числами, например, вот такой:
    [1, 2, 3, 4, 5, 6]
Слейте пары элементов вместе:
    [12, 34, 56]*/

const arrayNumbers = [1, 2, 3, 4, 5, 6];

function numbersMerge(arrayNumbers) {
    let mergedArray = [];

    for (let i = 0; i < arrayNumbers.length; i += 2) {
        let mergedElement = arrayNumbers[i] * 10 + arrayNumbers[i + 1];
        mergedArray.push(mergedElement);
    }

    return mergedArray;
}

console.log(numbersMerge(arrayNumbers));


// Задача 2.6.6
/*Дана некоторая строка со словами:
    'aaa bbb ccc eee fff'
Сделайте заглавным первый символ каждого второго слова в этой строке. В нашем случае должно получится следующее:
    'aaa Bbb ccc Eee fff'*/

const words = 'aaa bbb ccc eee fff';

function uppercaseChar(words) {
    let arrWords = words.split(' ');
    let newArrWordsUp = [];

    for (let i = 0; i < arrWords.length; i++) {
        if (i % 2 === 1) {
            let word = arrWords[i].charAt(0).toUpperCase() + arrWords[i].slice(1);
            newArrWordsUp.push(word);
        } else {
            newArrWordsUp.push(arrWords[i]);
        }
    }
    return newArrWordsUp;
}


console.log(uppercaseChar(words))