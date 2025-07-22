/*
Задача. Фильтрация строки
Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки.
Результат вывести в консоль.
 */

const string = "Привет! Как дела?";

/*
Вариант 1:

function getVowels(string) {
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']
    return string.toLowerCase().split('').filter(function (letter) {
        return vowels.includes(letter);
    }).join('');
}
 */

// Вариант 2 (через reduce):

function getVowels(string) {
    const vowels = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']
    return string.toLowerCase().split('').reduce(function (acc, current) {
        return vowels.includes(current) ? acc + current : acc;
    }, '')
}

console.log(getVowels(string));