/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 2// тестовое значение, можно изменять
let grade

if (0 <= score && score <= 49) {
    grade = 'F'
} else if (50 <= score && score <= 69) {
    grade = 'D'
}
else if (70 <= score && score <= 79) {
    grade = 'C'
}
else if (80 <= score && score <= 89) {
    grade = 'B'
}
else if (90 <= score && score <= 100) {
    grade = 'A'
} else {
    grade = 'Error!!!'
}

console.log(grade);
