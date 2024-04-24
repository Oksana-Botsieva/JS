/*
Задача 5.4.1
Даны абзацы с текстом. Сделайте так, чтобы по нажатию на любой абзац его текстом становилось значение '!'.*/

const  replaceValue = () => {
    const text = document.querySelectorAll('.text');

    text.forEach(text => {
        text.addEventListener('click', () => {
            text.textContent = '!';
        })
    })
}

replaceValue();

/*Задача 5.4.2
Даны ссылки и кнопка. По нажатию на кнопку получите массив атрибутов href ссылок.*/

const getHref = () => {
    const links = document.querySelectorAll('.link');
    const hrefArray = [];

    links.forEach(link => {
        hrefArray.push(link.getAttribute('href'));
    })
    return hrefArray;
}

const getHrefBtn = document.getElementById('getHrefBtn');
getHrefBtn.addEventListener('click', () => {
    const hrefAttributes = getHref();
    console.log(hrefAttributes)
})

// /*Задача 5.4.3
/*
Дан абзац и кнопка. По нажатию на кнопку сделайте в цикле строку '123456789' и запишите ее в абзац.*/

const createStr = () => {
    const paragraph = document.getElementById('paragraph');
    let str = '';

    for (let i = 1; i <= 9; i++ ) {
        str += i;
    }
    paragraph.textContent = str;
}

document.getElementById('generateStringBtn').addEventListener('click', createStr);

// /*Задача 5.4.4
// /*Даны три абзаца. Выведите в первый текущий год, во второй - текущий месяц, в третий - текущий день.

const createCurrentDate = () => {
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

document.getElementById('year').textContent = `Текущий год: ${year}`;
document.getElementById('month').textContent = `Текущий месяц: ${month}`;
document.getElementById('day').textContent = `Текущий день: ${day}`;
}

createCurrentDate();

/*
Задача 5.4.5
Дана ссылка, абзац и кнопка. По нажатию на кнопку запишите href ссылки в текст абзаца.*/

const getHrefParagraph = () => {
    const linkText = document.getElementById('linkText');
    const link = document.getElementById('link')

    linkText.textContent = `Ссылка: ${link.getAttribute('href')}`
}
document.getElementById('getHref').addEventListener('click',getHrefParagraph);

