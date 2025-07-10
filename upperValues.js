/* Задание 2.4.1:

Функция должна перебрать все значения свойств объекта, преобразовать их в верхний регистр и вернуть в виде массива
Пример:

    upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['CЕРГЕЙ', 'ПЕТРОВ']

 */

function upperValues(obj) {
    return Object.values(obj).map((value) => value.toUpperCase());
}

const result = upperValues({ name: 'Сергей', lastName: 'Петров' });
console.log(result);