/*
Задача 5.3.1
Дан абзац, инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал введенного числа.*/

const calculateFactorial = () => {

    const resultParagraph = document.getElementById('resultParagraph')

    const numberInput = document.getElementById('numberInput')
    const number = parseInt(numberInput.value);
    const factorial = n => {
        if ( n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    const result = factorial(number);

    resultParagraph.textContent = `Факториал числа ${number} равен ${result}`
}

const calculateFactorialButton = document.getElementById('calculateFactorialButton');
calculateFactorialButton.addEventListener('click',calculateFactorial);

/*Задача 5.3.2
Даны два инпута, кнопка и абзац. В инпуты вводятся целые числа. Определите, какое из введенных чисел больше и выведите его в абзац.*/

const compareNumbers = () => {

    const numberInput1 = document.getElementById('numberInput1')
    const numberInput2 = document.getElementById('numberInput2')

    const number1 = parseInt(numberInput1.value)
    const number2 = parseInt(numberInput2.value)

    const resultPrgh = document.getElementById('resultPrgh')

    if ( number1 > number2) {
        resultPrgh.textContent = `Большее число: ${number1}`;
    } else if (number2 > number1) {
        resultPrgh.textContent = `Большее число: ${number2}`;
    } else {
        resultPrgh.textContent = 'Числа равны';
    }
}

const compareButton = document.getElementById('compareButton');
compareButton.addEventListener('click',compareNumbers);

/*Задача 5.3.3
Дана кнопка и инпут. В инпут вводится число. По нажатию на кнопку найдите сумму цифр введеного числа.
 */

const sumDigits = () => {

    const numInput = document.getElementById('numInput')
    const number = parseInt(numInput.value);

    let sum = 0;
    for (let digit of number.toString()) {
        sum += parseInt(digit);
    }
}

const sumDigitBtn = document.getElementById('sumDigitBtn');
sumDigitBtn.addEventListener('click', sumDigits)

/*
Задача 5.3.4
Дан абзац, инпут и кнопка. В инпут вводится слово. По нажатию на кнопку переверните слово и запишите его в абзац.*/

const reverseWord = () => {
    const inputWord = document.getElementById('inputWord').value;
    const reversedWord = inputWord.split('').reverse().join('');
    document.getElementById('outputParagraph').textContent = reversedWord;
}
document.getElementById('reverseButton').addEventListener('click', reverseWord);

/*Задача 5.3.5
Даны пустые абзацы и кнопка. По нажатию на кнопку заполните абзацы числами по порядку.*/

const fillParagraphs = () => {
    const outputParagraphs = document.querySelectorAll('.output-paragraph');


    outputParagraphs.forEach((paragraph, index) => {
        paragraph.textContent = index + 1;
    });
}
document.getElementById('fillButton').addEventListener('click', fillParagraphs);

