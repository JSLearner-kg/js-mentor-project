/*
Задача: Генерация (throw) кастомных ошибок
Напишите функцию validateUser(user), которая принимает объект user.
Функция должна проверять два условия:
1) У объекта user должно быть свойство name, и оно должно быть непустой строкой.
2) У объекта user должно быть свойство age, и оно должно быть числом больше или равным 18.
Если любая из проверок не проходит, функция должна выбрасывать (throw) новую ошибку new Error()
с понятным сообщением (например, "Имя не указано" или "Возраст должен быть 18+").
Если все проверки пройдены успешно, функция должна возвращать true.
 */

function validateUser(user) {
    if (!user.name) {
        throw new Error('Имя не указано');
    } else if (!isFinite(user.age)) {
        throw new Error('Некорректно указан возраст')
    } else if (user.age < 18) {
        throw new Error('Возраст должен быть 18+');
    }
    return true;
}

/*
Проверка:

try {
    const user1 = { name: 'John', age: 18 };
    console.log('User 1 valid:', validateUser(user1));
} catch (e) {
    console.error(e.message);
}

 */
