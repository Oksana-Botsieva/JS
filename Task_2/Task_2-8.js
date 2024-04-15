// Задача 2.8.1
/*
Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.*/

const str = 'ghbRbbBB'

function uppercaseLetters(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            counter++;
            if (counter > 2) {
                return false;
            }
        }
    }
    return true;
}

console.log(uppercaseLetters(str))

// Задача 2.8.2
/*
Дана некоторая строка:

    '1 22 333 4444 22 5555 1'
Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:

    '1 22 333 22 1'*/

const string = '1 22 333 4444 22 5555 1'

function deleteSubstring (string) {

    let substrings = string.split(' ');

    const filteredSubstrings = substrings.filter(function(substring) {
        return substring.length <= 3;
});
return filteredSubstrings.join(" ")
}

console.log(deleteSubstring(string));


// Задача 2.8.3
/*
Даны два массива:

    let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
Слейте эти массивы в новый массив следующим образом:

    [1, 2, 'a', 'b', 'c', 3]
*/


let arr1 = [1, 2, 3];
let arr2 = ['a', 'b', 'c'];
const index = 1;
function arrayMerging (arr1, index, arr2) {

arr1.splice(index + 1, 0, ...arr2);
    return arr1
}

console.log(arrayMerging(arr1,index,arr2))