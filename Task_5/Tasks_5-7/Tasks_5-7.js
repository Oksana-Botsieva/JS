// Задача 5.7.1
// Даны теги li с числами, инпут и кнопка. По нажатию на кнопку найдите сумму чисел и выведите их в инпут.

const calculateSum = () => {
    const number = document.querySelectorAll('.number');
    let sum = 0

    number.forEach(li => {
        sum += parseInt(li.textContent);
    })

    const resultInput = document.getElementById('resultInput').value = sum;
}
document.getElementById('calculateSumBtn').addEventListener('click',calculateSum);

// Задача 5.7.2
// Даны теги li с числами и кнопка. По нажатию на кнопку увеличьте все числа в тегах li на единицу.

const increaseNumber = () => {
    const numberList = document.querySelectorAll('#numberList li');

    numberList.forEach(li => {
        let number = parseInt(li.textContent);
        li.textContent = number + 1;
    })
}
document.getElementById('increaseBtn').addEventListener('click',increaseNumber);

// Задача 5.7.3
// Дан инпут, абзац и кнопка. В инпут вводится число. По нажатию на кнопку получите массив
// делителей числа и выведите их в абзац через запятую.

const getDivisorsNumber = () => {
    const numberInput = parseInt(document.getElementById('numberInput').value);
    const divisors = [];

    for (let i = 1; i <= numberInput; i++) {
        if (numberInput % i === 0) {
            divisors.push(i);
        }
    }

    const divisorsNumberParagraph = document.getElementById('divisorsNumberParagraph');
    divisorsNumberParagraph.textContent = divisors.join(',');
}

document.getElementById('getDivisorsNumberBtn').addEventListener('click', getDivisorsNumber);


// Задача 5.7.4
// Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текст переворачивался.

const reverseText = () => {
    const paragraphs = document.querySelectorAll('.reverse-text');

    paragraphs.forEach(paragraph => {
        paragraph.addEventListener('click', () => {
            const text = paragraph.textContent;
            paragraph.textContent =  text.split('').reverse().join('');
        });
    });
}

reverseText();

// Задача 5.7.5
// В инпут вводится число из 6-ти цифр. По нажатию на кнопку проверьте, равна ли сумма
// первых трех цифр сумме вторых трех цифр.

const sumEquality = () => {
    const numbersInput = document.getElementById('numbersInput').value;

    if (numbersInput.length !== 6 || isNaN(numbersInput)) {
        alert('Введите шестизначное число');
    }

    const numbersSum1 = Array.from(numbersInput.substring(0,3)).reduce((acc,digit) => acc + parseInt(digit), 0);
    const numbersSum2 = Array.from(numbersInput.substring(3)).reduce((acc,digit) => acc + parseInt(digit), 0);

    if (numbersSum1 === numbersSum2) {
        alert('Суммы равны ');
    } else {
        alert('Суммы не равны');
    }
}
document.getElementById('checkSumEqualityBtm').addEventListener('click', sumEquality);

