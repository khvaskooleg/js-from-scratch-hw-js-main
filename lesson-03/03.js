// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    if (a > b && b > c) {
        return a
    } else if (b > a && a > c) {
        return b
    } else {
        return c
    }
}

// console.log(findLargest(5, 9, 1));
