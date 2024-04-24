// Задача 3.5.1
// Дан текст со словами. Запишите в массив все слова, начинающиеся на букву 'a'.


let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, voluptas.";
let arr = []

const wordA = (text, arr) => {

    let array = text.split(' ');

    for (let i = 0; i < array.length; i++) {
        if (array[i][0] === 'a' ) {
            arr.push(array[i]);
        }
    }
    return arr
}

console.log(wordA(text,arr))

// Задача 3.5.7
/*
Дан следующий объект:
Найдите сумму элементов этого объекта.*/

let obj = {
    1: {
        1: {
            1: 111,
            2: 112,
            3: 113,
        },
        2: {
            1: 121,
            2: 122,
            3: 123,
        },
    },
    2: {
        1: {
            1: 211,
            2: 212,
            3: 213,
        },
        2: {
            1: 221,
            2: 222,
            3: 223,
        },
    },
    3: {
        1: {
            1: 311,
            2: 312,
            3: 313,
        },
        2: {
            1: 321,
            2: 322,
            3: 323,
        },
    },
}

const sumOfNestedObject = (obj) => {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += sumOfNestedObject(obj[key]);
        } else {
            sum += obj[key];
        }
    }
    return sum;
}

console.log(sumOfNestedObject(obj));