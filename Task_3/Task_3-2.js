// Задача 3.2.1
// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

const checkPenultimateDigit = () => {

    for (let i = 10; i <= 1000; i++) {
        let numString = i.toString();

        let secondLastDigit = numString[numString.length - 2];
        if (secondLastDigit % 2 === 0) {
            console.log(i)
        }
    }
}

// checkPenultimateDigit();

// Задача 3.2.2
// Дан массив. Удалите из него каждый пятый элемент.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrDeleteNumberFive = arr => {

    return arr.filter((num, index) => (index + 1) % 5 !==0);
}

// console.log(arrDeleteNumberFive(arr))


// Задача 3.2.3
/*Дана некоторая переменная с числом:

    let num = 5;
Сделайте строку, содержащую столько нулей, сколько указано в переменной. В нашем случае получится такая строка:

    '00000'*/

let num = 5;

const zeroString = num => '0'.repeat(num);

console.log(zeroString(num))


// Задача 3.2.4
/*ана некоторая строка со словами:

    'aaa bbb ccc eee fff'
Удалите из этой строки каждое второе слово. В нашем случае должно получится следующее:

    'aaa ccc fff'*/

let string =     'aaa bbb ccc eee fff';

const deleteSecondWord = string => string.split(' ').filter((item, index) => index % 2 === 0).join(' ')

console.log(deleteSecondWord(string))


// Задача 3.2.5
/*№5

Дан массив:

    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
Найдите сумму элементов этого массива.*/

let array =   [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

const sumArrayNumber = array.reduce((total, innerArray)=> {
    return total + innerArray.reduce((innerTotal, num) => innerTotal + num, 0)
},0);

console.log(sumArrayNumber)

