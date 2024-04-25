// Задача 2.5.1
/* Дана некоторая строка, например, вот такая:
    '023m0df0dfg0'
Получите массив позиций всех нулей в этой в строке.*/

const str = "023m0df0dfg0";
function findZeroPositions(str) {
    let zeroPositions = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            zeroPositions.push(i);
        }
    }

    return zeroPositions;
}


// console.log(findZeroPositions(str))



// Задача 2.5.2
/* Дана некоторая строка:
    'abcdefg'
Удалите из этой строки каждый третий символ. В нашем случае должно получится следующее:
    'abdeg'*/

const string = 'abcdefg';

function deleteSymbol (string) {
    let arr = string.split('')

    for (let i = 2; i < arr.length; i+=3 ) {
        arr.splice(2,[i])
    }

    return arr.join('')
}

console.log(deleteSymbol(string))


// Задача 2.5.3
/* Дан некоторый массив, например, вот такой:
    [1, 2, 3, 4, 5, 6]
Поделите сумму элементов, стоящих на четных позициях, на сумму элементов, стоящих на нечетных */
const arr = [1, 2, 3, 4, 5, 6]

function sumDivision (arr) {
    let evenNum = 0;
    let oddNum = 0;

    arr.forEach(function (element, index) {
        if (index % 2 === 0 ) {
            evenNum += element;
        } else {
            oddNum += element;
        }
    })


    return evenNum / oddNum;
}

console.log(sumDivision(arr))
