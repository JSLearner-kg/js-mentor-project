/*
Задача. Сформировать произвольный массив объектов, описывающий, например, работников компании,
в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000).
Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, чья зарплата превышает 1000.
 */

const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

// Вариант 1 (через filter + map):

function getWorthyWorkers(array) {
    return array.filter(worker => worker.salary > 1000).map(worker => worker.name);
}

/*
Вариант 2 (через reduce):

function getWorthyWorkers(array) {
    return array.reduce(function (acc, current) {
        current.salary > 1000 ? acc.push(current.name) : acc;
        return acc;
    }, [])
}
 */

console.log(getWorthyWorkers(workers));