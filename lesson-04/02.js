/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы 
из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему 
проекту за счёт hoisting.
*/

// function findUniqueElements(array) {
//     let newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i]) 
//     }
//     function includesElement(newArray, array[i]) {
//         for (let i = 0; i < newArray.length; i++) {
//             if (newArray[i] = array[i])
//         }
//     }    
// }


// for (let a = 0; a < newArray.length; a++) {
//             if (newArray[i] != array[i]) {
//                 newArray.push(array[i])
//                 return newArray;

function findUniqueElements(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!includesElement(newArray, array[i])) {
            newArray.push(array[i])
        }
    }
    return newArray;    
}


let result = findUniqueElements([1, 3, 4, 2, 4, 2, 6])
console.log(result);

