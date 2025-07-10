function reduceAnalog(array, fn, initialValue) {
    let accumulator;
    let startIndex;
    // Проверяем, было ли передано начальное значение
    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = array[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < array.length; i++) {
        const current = array[i];
        accumulator = fn(accumulator, current);
    }
    return accumulator;
}

const result = reduceAnalog([1, 2, 3], (accumulator, current) => accumulator + current);
console.log(result);