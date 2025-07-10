/*
Задание 2.5:*

Функция принимает объект и должна вернуть Proxy для этого объекта
Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
Пример:

   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */

function createProxy(obj) {
    return new Proxy(obj, {
        set(obj, key, value) {
            obj[key] = value ** 2;
            return true;
        }
    })
}

/* Проверка
const player = {};
const playerProxy = createProxy(player);
playerProxy.hp = 10;

console.log(playerProxy); // { hp: 100 }
 */