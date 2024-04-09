// Задача 1.9.1
// Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.

let array = ["http://dgdyt", "88098089", "http://htreww", "1246", "3435547"];
let prefix = "http://";

const filteredArray = array.filter(function(element) {
    return element.startsWith(prefix);
});

console.log(filteredArray);


// Задача 1.9.2
// Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.

let arr = ["dgdyt.html", "88098089", "http://htreww", "1246.html", "3435547"];
let suffix = ".html";

const filterArray = arr.filter(function(element) {
    return element.endsWith(suffix);
});

// console.log(filterArray);


// Задача 1.9.3
// Дан массив с числами. Увеличьте каждое число из массива на 10 процентов.

let arrNumber = [1, 5, 7 ,3 ,3]

const filterArrNumber = []

for (let i = 0; i < arrNumber.length; i++) {
    filterArrNumber.push(arrNumber[i] + arrNumber[i] * 0.1);
}
console.log(filterArrNumber)