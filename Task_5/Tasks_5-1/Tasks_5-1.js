/*
Задача 5.1.1
Даны два инпута, абзац и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите в абзац сумму этих чисел.*/

const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const calculateButton = document.getElementById('calculateButton');
const resultParagraph = document.getElementById('resultParagraph');


calculateButton.addEventListener('click', function () {
    const number1 = parseFloat(number1Input.value)
    const number2 = parseFloat(number2Input.value)

    if (!isNaN(number1) && !isNaN(number2)) {

        const sum = number1 + number2;
        resultParagraph.textContent = `Сумма чисел: ${sum}`;
    } else {
        resultParagraph.textContent = 'Введите корректные числа'
    }
});

/*Задача 5.1.2
Дан абзац с числом и кнопка. По нажатию на кнопку возведите текст абзаца в квадрат.*/
const setupSquareButton = () => {
    const button = document.getElementById('squareButton')

    button.addEventListener('click', function () {
        let paragraph = document.getElementById('number');
        let number = parseFloat(paragraph.textContent);

        let result = number * number;

        paragraph.textContent = result
    })
}

setupSquareButton();


/*Задача 5.1.3
Дан абзацы с числами, абзац и кнопка. По нажатию на кнопку найдите сумму значений абзацев и запишите ее в абзац.
 */

const calculateSum = () => {
    const button = document.getElementById('resultSum');
    const paragraph1 = document.getElementById('numbers1')
    const paragraph2 = document.getElementById('numbers2')
    const result = document.getElementById('result')

    button.addEventListener('click', function () {
        const num1 = parseInt(paragraph1.textContent);
        const num2 = parseInt(paragraph2.textContent);

        const sum = num1 + num2;
        result.textContent = `Сумма чисел: ${sum}`;
    })
}

calculateSum();

/*Задача 5.1.4
Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его значение возводилось в квадрат.
 */

const square = () => {
    const paragraph1 = document.getElementById('paragraph1');
    const paragraph2 = document.getElementById('paragraph2');
    const paragraph3 = document.getElementById('paragraph3');

    function squareNumber(event) {
        const number = parseInt(event.target.textContent);
        const squaredNumber = Math.pow(number, 2);
        event.target.textContent = squaredNumber;
    }

    paragraph1.addEventListener('click', squareNumber);
    paragraph2.addEventListener('click', squareNumber);
    paragraph3.addEventListener('click', squareNumber);
}
square();

/*Задача 5.1.5
Даны инпуты, в которые вводятся числа. Сделайте так, чтобы по потери фокуса в любом инпуте его значение возводилось в квадрат.*/

const focusLossSquareNumber = () => {
    const input1 = document.getElementById('numberOne');
    const input2 = document.getElementById('numberTwo');
    const input3 = document.getElementById('numberThree');


    function squareNumber(event) {
        const input = event.target;
        const value = parseFloat(input.value)
        input.value = value ** 2;
    }
    input1.addEventListener('blur', squareNumber);
    input2.addEventListener('blur', squareNumber);
    input3.addEventListener('blur', squareNumber);
}

focusLossSquareNumber();