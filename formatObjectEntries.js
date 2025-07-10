/*
Напишите функцию formatObjectEntries(obj), которая перебирает все свойства объекта и возвращает
массив отформатированных строк в формате 'КЛЮЧ_В_ВЕРХНЕМ_РЕГИСТРЕ: значение'.
 */

function formatObjectEntries(obj) {
    return Object.entries(obj).map(([key, value]) => `${key.toUpperCase()}: ${value}`);
}

/*
Проверка:

const user = {
    name: 'Alex',
    age: 30,
    city: 'New York'
};

const formatted = formatObjectEntries(user);
console.log(formatted); // [ 'NAME: Alex', 'AGE: 30', 'CITY: New York' ]

 */

