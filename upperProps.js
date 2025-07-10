/* Задание 2.4:

Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива
Пример:

    upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']

 */

function upperProps(obj) {
    return Object.keys(obj).map((key) => key.toUpperCase());
}

const result = upperProps({ name: 'Сергей', lastName: 'Петров' });
console.log(result);