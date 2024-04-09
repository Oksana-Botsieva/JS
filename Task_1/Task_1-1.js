// Задача 1.1

/*Дано число. Проверьте, отрицательное оно или нет.
Выведите об этом информацию в консоль.*/
const isNegativeNumber = (number) => {
    if (number < 0 ) {
        console.log("Число отрицательное")
    } else {
        console.log("Число положительное")
    }
}
// isNegativeNumber(3);




// Задача 1.2

/*Дана строка. Выведите в консоль длину этой строки.*/
function SrtLength (str) {
    console.log(str.length)
}

// SrtLength();



// Задача 1.3

/*
Дана строка. Выведите в консоль последний символ строки.
*/
const lastSymbol = (str) => {
        const lastChar = str.charAt(str.length - 1);
        console.log(lastChar);
}

// lastSymbol('hello');


// Задача 1.4

/*Дано число. Проверьте, четное оно или нет.*/
function calc(x) {
    if (x % 2 === 0) {
        console.log('Число четное')
    } else {
        console.log('Число нечетное')
    }
}

// calc(5);


// Задача 1.5

/*
Даны два слова. Проверьте, что первые буквы этих слов совпадают.
*/
const getFirstLetters = (word1, word2) => {
    const firstLetterWord1 = word1.charAt(0).toLowerCase(0);
    const firstLetterWord2 = word2.charAt(0).toLowerCase(0);
    return firstLetterWord1 === firstLetterWord2;
}

// console.log(getFirstLetters('Hello', 'hey'))


// Задача 1.6

/*
Дано слово. Получите его последнюю букву.
    Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
*/
const lastLetter = (str) => {
    if (str.slice(-1) === 'ь') {
       return str.charAt(str.length - 2);
    } else {
        return str.slice(-1);
    }
}

// console.log(lastLetter(''))





