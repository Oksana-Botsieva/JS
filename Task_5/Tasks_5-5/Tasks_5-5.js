/*
Задача 5.5.1
Дан инпут, кнопка и три абзаца. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите в первый абзац год, во второй абзац - месяц, в третий день.*/

const showDate = () => {
    const dateInput = document.getElementById('dateInput').value
    const dateParts = dateInput.split('-');

    const year = document.getElementById('year');
    const month = document.getElementById('month');
    const day = document.getElementById('day');

    year.textContent = `Год: ${dateParts[0]}`;
    month.textContent = `Месяц: ${dateParts[1]}`;
    day.textContent = `День: ${dateParts[2]}`;
}

document.getElementById('getDateBtn').addEventListener('click',showDate)

/*
Задача 5.5.2
Даны два инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку заполните массив целыми числами от первого введеного числа до последнего.*/

const createArrNumber = () => {
    const numberInput1 = document.getElementById('numberInput1').value;
    const numberInput2 = document.getElementById('numberInput2').value;

    if (!isNaN(numberInput1) && !isNaN(numberInput2)) {
        const numbers = [];

        if ( numberInput1 <= numberInput2) {
            for (let i = numberInput1; i <= numberInput2; i++) {
                numbers.push(i);
            }
        } else {
            for (let i = numberInput1; i >= numberInput2; i--) {
                numbers.push(i);
            }
        }
        console.log(numbers);
    }

}

document.getElementById('getNumberBtn').addEventListener('click',createArrNumber)

// Задача 5.5.3
// Дан инпут, абзац и кнопка. В инпут вводится строка. По нажатию на кнопку выведите в абзац последний символ введенной строки.

const getSymbolStr = () => {
    const textInput1 = document.getElementById('textInput1').value;
    const paragraph = document.getElementById('paragraph')

    const symbol = textInput1[textInput1.length -2];
    paragraph.textContent = symbol;
}

document.getElementById('getSymbol').addEventListener('click',getSymbolStr);

// Задача 5.5.4
// Дан абзац, в котором записано число 1. По нажатию на кнопку увеличивайте число в абзаце на единицу.

const counterNumber =  () => {
    const str = document.getElementById('str');
    const counterBtn = document.getElementById('counterBtn');

    counterBtn.addEventListener('click', () => {
        let currentNumber = parseInt(str.textContent);
        currentNumber++;
        str.textContent = currentNumber;
    })
}
counterNumber();


// Задача 5.5.5
// Дан инпут и абзац. В инпут вводится строка со словами. По потери фокуса выведите в абзац количество слов во введенной строке.


