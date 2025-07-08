/*
Задание 2.2:

Напишите аналог встроенного метода map для работы с массивами
Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
Пример:

map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]

 */

function mapAnalog(array, fn) {
    const newArray = [];
    for (const element of array) {
        newArray.push(fn(element));
    }
    return newArray;
}

result = mapAnalog([1, 2, 3], (el) => el ** 2);
console.log(result);