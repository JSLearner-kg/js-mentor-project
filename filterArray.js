/*
Задача. Создайте функцию которая в качестве аргумента принимает целое число, и проверяет четное оно или нет.
Затем создайте произвольный массив целых чисел. И используя функцию проверки числа на четность, создайте из готового массива новый,
который будет содержать только четные числа. Результат выведите в консоль.
 */

const mixedArray = [3,13,74,14,66,15,22,4];


const isEven = num => num % 2 === 0;

// Вариант 1 (через filter):
const filterArray = (array, fn) => array.filter(fn);

/*
Вариант 2 (через reduce):

function filterArray(array, fn) {
    return array.reduce(function (acc, current) {
        return fn(current) ? [...acc, current] : acc;
    }, []);
}
 */

console.log(filterArray(mixedArray, isEven));