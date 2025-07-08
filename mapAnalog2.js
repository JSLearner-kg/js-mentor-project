// Исходная функция forEachAnalog
function forEachAnalog(array, fn) {
    for (const element of array) {
        fn(element);
    }
}

// Новая функция mapAnalog2 на основе forEachAnalog
function mapAnalog2(array, transformFn) {
    let newArray = [];
    forEachAnalog(array, (element) => {
        const newValue = transformFn(element);
        newArray.push(newValue);
    });
    return newArray;
}

// Проверка:
const result = mapAnalog2([1, 2, 3], (el) => el ** 2);
console.log(result); // Выведет [1, 4, 9]