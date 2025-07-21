/*
Задача: Безопасный парсинг JSON
В JavaScript есть встроенная функция JSON.parse(string), которая превращает строку в объект.
Однако если строка содержит некорректный JSON, эта функция "выбрасывает" ошибку и останавливает выполнение скрипта.
 */

const validJson = '{"name": "Alice", "age": 28}';
const invalidJson = '{"name": "Bob", age: 40}'; // Ошибка: age без кавычек

function parseJson (jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.log(e.message);
        return null;
    }
}

const user1 = parseJson(validJson);
console.log(user1); // Ожидаемый вывод: { name: 'Alice', age: 28 }

const user2 = parseJson(invalidJson);
// Ожидаемый вывод в консоли: сообщение об ошибке, например "Unexpected token a in JSON at position 18"
console.log(user2); // Ожидаемый вывод: null