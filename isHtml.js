/*
Задача. Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла.
Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.
 */

const path = "/users/download/index.html"

/*
Вариант 1 (через метод endsWith):

function isHtml(path) {
    return path.endsWith('.html');
}
 */

// Вариант 2 (через метод slice):

function isHtml(path) {
    return path.trim().slice(-5) === '.html';
}

console.log(isHtml(path));