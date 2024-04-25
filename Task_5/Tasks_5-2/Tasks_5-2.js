/*
Задача 5.2.1
Дан абзац и кнопка. По нажатию на кнопку найдите сумму чисел от 1 до 100 и запишите результат в абзац.
*/
const calculateAndDisplaySum = () => {
    const paragraph = document.getElementById('paragraph')
    const button = document.getElementById('resultSum')

    function calculateSum () {
        let sum = 0;
        for (let i = 0; i <= 100; i++) {
            sum += i;
        }
        return sum;
    }

    function clickButton() {
        const sum = calculateSum();
        paragraph.textContent = `Сумма чисел от 1 до 100: ${sum}`;
    }

    button.addEventListener('click', clickButton);
}

calculateAndDisplaySum();


/*Задача 5.2.2
Дана кнопка и два инпута. В инпуты вводятся числа. По нажатию на кнопку найдите сумму введенных чисел*/

const calculateSum = () => {
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    const sumNumbers = document.getElementById('sumNumbers');

    sumNumbers.addEventListener('click', function () {
        const  num1 = parseInt(number1.value)
        const  num2 = parseInt(number2.value)

        const sum = num1 + num2;
    })
}

calculateSum();

/*Задача 5.2.3
Даны абзацы, кнопка и див. По нажатию на кнопку найдите количество абзацев и выведите это значение в див.
 */

const countParagraphs = () => {
    const indent1 = document.getElementById('indent1');
    const indent2 = document.getElementById('indent2');
    const indent3 = document.getElementById('indent3');

    const indentCount = 3;

    const result = document.getElementById('result');

    result.textContent = `Количество абзацев: ${indentCount}`;
}
    const numberOfParagraphs = document.getElementById('numberOfParagraphs');
  numberOfParagraphs.addEventListener('click',countParagraphs );