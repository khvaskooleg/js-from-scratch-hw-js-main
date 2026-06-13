/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки 
повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    let newArray = [];
    let array = Array.from(str);
    for (i = 0; i < array.length; i++) {
        newArray.push(array[i] + array[i]);
    }
    let newStr = newArray.join('')
    return newStr;
}
let result = doubleEachCharacter('hits')
console.log(result);

