// Задача 5.6.1
// Дан инпут, кнопка и абзац. В инпут вводится год. По нажатию на кнопку определите, введен
// високосный год или нет и выведите информацию об этом в абзац.

const checkOarYear = () => {
    const yearInput = document.getElementById('yearInput');
    const paragraphResult = document.getElementById('paragraphResult');

    const isLeapYear = (yearInput.value % 4 === 0 && yearInput.value % 100 !== 0) || (yearInput.value % 400 === 0);

    if (isLeapYear) {
        paragraphResult.textContent = `${yearInput.value} год високосный`;
    } else {
        paragraphResult.textContent = `${yearInput.value} год не високосный`;
    }
}
document.getElementById('checkOarBtn').addEventListener('click',checkOarYear);

// Задача 5.6.2
// Дан инпут и кнопка. По нажатию на кнопку выведите в инпут случайное число из диапазона от 1 до 100.

const randomizeNumber = () => {
    const randomInput = document.getElementById('randomInput');
    randomInput.value = Math.floor(Math.random() * 101);
}

document.getElementById('numberBtn').addEventListener('click', randomizeNumber);


// Задача 5.6.3
/*
Дан инпут, кнопка и абзац. В инпут вводится дата в формате 2025-12-31. По нажатию на кнопку выведите
в абзац день недели, соответствующий этой дате.*/
const getDayOfWeek = () => {
    const dateInput = document.getElementById('dateInput').value;
    const dayOfWeekParagraph = document.getElementById('dayOfWeekParagraph');

    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    const date = new Date(dateInput);
    const dayOfWeekIndex = date.getDay();
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];

    dayOfWeekParagraph.textContent = `День недели: ${dayOfWeek}`;
}

document.getElementById('getDayOfWeeksBtn').addEventListener('click', getDayOfWeek);

// Задача 5.6.4
// Дан див с шириной, высотой и границей, и кнопка. По клику на кнопку увеличьте размеры дива в два раза.

const increaseSize = () => {
    const myDiv = document.getElementById('myDiv');
    const increaseSizeBtn =document.getElementById('increaseSizeBtn');

    increaseSizeBtn.addEventListener('click', () => {
        const currentWidth = myDiv.offsetWidth;
        const currentHeight = myDiv.offsetHeight;

        const newWidth = currentWidth * 2;
        const newHeight = currentHeight * 2;

        myDiv.style.width = newWidth + 'px';
        myDiv.style.height = newHeight + 'px';
    })
}

increaseSize();

// Задача 5.6.5
// Даны ссылки. Сделайте так, чтобы по наведению на любую ссылку над ней появлялось значение ее атрибута href.

const getHrefLinks = () => {
    const links = document.querySelectorAll('.task_5-6.link');

    links.forEach(link => {
        link.addEventListener('mouseover', () => {
            const hrefValue = link.getAttribute('href');
            link.setAttribute('title', hrefValue);
    })
})
    link.addEventListener('mouseout', () => {
        link.removeAttribute('title');
    });
}
getHrefLinks();



