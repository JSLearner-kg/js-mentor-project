/*
Задание 2.1:

Напишите аналог встроенного метода forEach для работы с массивами
Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
Пример:


    forEach([1, 2, 3], (el) => console.log(el))

 */

function forEachAnalog(array, fn) {
    for (const element of array) {
        fn(element);
    }
}

forEachAnalog([1, 2, 3], (el) => console.log(el));
