// Задача 1.2.1
/*
Дано число. Выведите в консоль первую цифру этого числа.
*/
const firstDigit = (number) => {
    return number.toString().charAt(0);
}

// console.log(firstDigit(45))

// Задача 1.2.2
/*
Дано число. Выведите в консоль последнюю цифру этого числа.
*/
const lastDigit = (num) => {
    let numStr = num.toString();
    return numStr[numStr.length - 1];
}

// console.log(lastDigit(45));

// Задача 1.2.3
/*
Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
*/

const sumFirstAndLast = (num) => {
    let numStr = num.toString();
    return (parseInt(numStr.charAt(0))) + parseInt(numStr[numStr.length - 1]);
}

// console.log(sumFirstAndLast(46585));

// Задача 1.2.4
/*
Дано число. Выведите количество цифр в этом числе.*/

const quantityDigit = number => number.toString().length;

// console.log(quantityDigit(3446456))

// Задача 1.2.5
/*
Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
*/

const coincidenceDigit = (number1, number2) => ((number1.toString().charAt(0)) === (number2.toString().charAt(0)));

// console.log(coincidenceDigit(3546,4353443));