// Задача 4.1.1
// Сделайте функцию, которая вернет текущий день недели словом.

const getDayOfWeek = () => {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
    const today = new Date().getDay();
    return daysOfWeek[today]
}

console.log(getDayOfWeek())


// Задача 4.1.2
// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.
const getDayOfWeeks = (dateString) => {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const date = new Date(dateString);
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
};

console.log(getDayOfWeeks('2024-04-10'));


// Задача 4.1.3
// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

const seconds = 456000;

const secondsToDays = seconds => {
    const secondsInDays = 86400;
    return Math.floor(seconds / secondsInDays)
}

const days = secondsToDays(seconds)
console.log(days)


// Задача 4.1.4
/*Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины,
заданной первым параметром.*/

let str = "Lorem ipsum dolor sit amet.";
let lengthStr = 8;

const maxLengthStr = (str, lengthStr) => {

    let newstr = str.slice(0, lengthStr);
    return str = newstr;
}

console.log(maxLengthStr(str,lengthStr))




