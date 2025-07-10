/*
Задание 2.6:*

Задание: Создание Read-Only Proxy
Ваша задача:

Напишите функцию createReadOnlyProxy(targetObject), которая возвращает "прокси-представление" этого объекта.
Этот прокси должен:
1) Позволять свободно читать любые свойства.
2) Блокировать любые попытки записать новое значение в свойство, выбрасывая ошибку.
3) Блокировать любые попытки удалить свойство, выбрасывая ошибку.

Пример использования:

const appState = {
  user: 'Admin',
  theme: 'dark',
  isMenuOpen: false
};

const readOnlyState = createReadOnlyProxy(appState);

// Эта операция должна работать
console.log(readOnlyState.user); // Вывод: Admin

// Эти операции должны приводить к ошибке
try {
  readOnlyState.theme = 'light';
} catch (error) {
  console.error(error.message); // Ожидаемый вывод: Ошибка: Попытка изменить read-only свойство 'theme'
}

try {
  delete readOnlyState.isMenuOpen;
} catch (error) {
  console.error(error.message); // Ожидаемый вывод: Ошибка: Попытка удалить read-only свойство 'isMenuOpen'
}

// Убедимся, что исходный объект не изменился
console.log(appState.theme); // Ожидаемый вывод: 'dark'

 */

const appState = {
    user: 'Admin',
    theme: 'dark',
    isMenuOpen: false
};

function createReadOnlyProxy(targetObject) {
    return new Proxy(targetObject, {
        set(targetObject, property, value) {
            throw new Error(`Ошибка: Попытка изменить read-only свойство ${property}`)
        },
        deleteProperty(targetObject, property) {
            throw new Error(`Ошибка: Попытка удалить read-only свойство ${property}`)
        }
    })
}

// ПРОВЕРКА:

const readOnlyState = createReadOnlyProxy(appState);

// Эти операции должны приводить к ошибке
try {
    readOnlyState.theme = 'light';
} catch (error) {
    console.error(error.message); // Ожидаемый вывод: Ошибка: Попытка изменить read-only свойство 'theme'
}

try {
    delete readOnlyState.isMenuOpen;
} catch (error) {
    console.error(error.message); // Ожидаемый вывод: Ошибка: Попытка удалить read-only свойство 'isMenuOpen'
}

// Убедимся, что исходный объект не изменился
console.log(appState.theme); // Ожидаемый вывод: 'dark'