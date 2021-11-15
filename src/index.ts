const Data = require("./data.js");
import { TestData3 } from './/types/types'

const testData: Array<number | string | boolean> = Data.testData;
const testData2: Array<number> = Data.testData2;
const testData3: Array<TestData3> = Data.testData3;
const testData4: Array<any> = Data.testData4;

// console.log(testData3)

// 1 (1бал)
// Сделать функцию поиска значений в массиве.

// Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
// Пример: 
// let result = array_find(testData, '/^raf.*/i') // ["Rafshan"]
// let result2 = array_find(testData, "Rafshan") // ["Rafshan"]

// const array_find = (arr:Array<number | string | boolean>, search: string|RegExp):Array<number | string | boolean | null> =>{
//  return arr.filter(value => value.toString().match(search))
// }

// console.log(array_find(testData, /^raf.*/i))

// 2 (1бал)
// Сделать функцию подсчета среднего значения, с возможностью исключения не числовых значений

// Синтаксис: array_avg(arr: array[, skipNaN: bool = false]): number
// Пример: 
// let result = array_avg(testData2) // ~265 
// let result2 = array_avg(testData) // ~420
// let result3 = array_avg(testData, true) // ~191

// function array_avg(arr: Array<number | string | boolean>, skipNaN: boolean = false): number {
//   const newArray_avg: Array<number> = []
//   arr.map(item => {
//     if (typeof item === 'number') {
//       newArray_avg.push(item)
//     }
//   })

//   const lengthArray: number = skipNaN ? arr.length : newArray_avg.length;

//   return newArray_avg.reduce((a: number, b: number) => (a + b)) as number / lengthArray;
// }

// let result = array_avg(testData)

// console.log(result)

// 3 (1бал)
// Сделать функцию которая разбивает массив на подмассивы указанной длинны.

// Синтаксис: array_chunk(arr: array, count: number): any[]
// Пример: 
// let result = array_chunk(testData2, 2) // [[1, 2], [1990, 85], [24, 5], [7, 8.1]]

// function array_chunk(arr: Array<number>, count: number): any[] {

//   var arrayResult: any[] = [];

//   while (arr.length)
//     arrayResult.push(arr.splice(0, count));

//   return arrayResult;
// }

// let result = array_chunk(testData2, 2)

// console.log(result)

// 4 (1бал)
// Сделать функцию которая обрезает массив до указанного значения.

// Синтаксис: array_skip_until(arr: array, value: any): any[]
// Пример: 
// let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
// let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
// let result3 = array_skip_until(testData, "asd") // []

// function array_skip_until(arr: Array<number | string | boolean>, value: any) {
//   const index = arr.findIndex(item => item === value);

//   return index >= 0 ? arr.slice(index) : [];
// }

// let result = array_skip_until(testData, 2)
// console.log(result)

// 5 (1бал)
// Сделать функцию для проверки существования значения в не нормализированном списке данных.

// Синтаксис: array_contains(arr: array, search: string|regex): bool
// Пример: 
// let result = array_contains(testData4, '/^raf.*/i') // true
// let result2 = array_contains(testData4, '/^azaza.*/i') // false

// function array_contains(arr, search: string | RegExp) {

//   const ind = arr.findIndex(item => item.toString().match(search))

//   // const ind = arr.hasOwnProperty('name')
//   return ind >= 0 ? true : false;

// }

// let result = array_contains(testData4, /1990/i)
// console.log(result) ////////////////////////////////////////////////////////переделать

// 6 (1бал)
// Сделать функцию для получения данных с массивов по указанному пути (аминь).

// Синтаксис: array_get(arr: array, path:string): any
// Пример:
// let result = array_get(testData4, '[5].name') // "Rafshan"
// let result2 = array_get(testData4, '[17][0][0][0][11][0]') // {name: "Rafshan", email: "rafshan@example.com", age: 11}
// let result3 = array_get(testData4, '[17][0][0][0][11][0][name]') // "Rafshan"

// function array_get(arr: Array<any>, path:string){
//   const arrWithPath = 'arr'+path;

//   return eval(arrWithPath)
// }

// let result = array_get(testData4, '[5].name')
// console.log(result)


// 7 (1бал)
// Сделать функцию для поиска значений и пути к нему в не нормализированном списке данных (аминь).

// Синтаксис: array_search(arr: array, search: string|regex[, path:string = '']): [path: string, value: string|number][]
// Пример: 
// let result = array_search(testData4, '/^raf.*/i') // [["[5].name", "Rafshan"], ["[13]", "Rafshan"], ["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]
// let result2 = array_search(testData4, '/^raf.*/i', '[17][0][0][0]') // [["[17][0][0][0][7]", "Rafshan"], ["[17][0][0][0][11][0].name", "Rafshan"]]
/////////////////////////////////////////////////////////////// переделать

// 8 (1бал)
// Создать функцию которая создает объект на основании двух представленных массивов используя один как ключи, а другой как значения. Не подходящие ключи массивов должны быть исключены.

// Синтаксис: array_combine(keys: array, values: array): Object
// Пример: 
// let result = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}


// function array_combine(keys: Array<number | string | boolean>, values: Array<number | string | boolean>): object {

//   const result = keys.reduce((o, k: any, i) => ({ ...o, [k]: values[i] }), {})
//   return result;
// }

// let result = array_combine(testData, testData2)
// console.log(result)

// 9 (1бал)
// Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.

// Доступные шаблоны: 
// 'string' => строки, 
// 'number' => числа, 
// 'int' => целые числа, 
// 'float' => числа с плавающей точкой, 
// 'bool' => true | false, 
// 'function' => функция, 
// 'array' => массив, 
// Object => объект {name: 'string'}
// Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
// Пример: 
// let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result2 = array_normalize(testData4, 'string', true) // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result3 = array_normalize(testData4, {age: 'float'}) // []
// let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]

// function array_normalize(arr: Array<any>, shema: string | Object, transform: boolean = false): any[] {
//   const ind = [];

//   arr.map(item => {
//     if ((typeof item == shema && typeof item == 'number') && transform === true) {
//       ind.push(item)
//     }
//     else if (typeof item === shema && transform===false)
//       ind.push(item)
//     else if (typeof item === 'object' && typeof item !=shema && typeof item.age === 'number' && transform === true)
//     {
//       ind.push({age: item.age})
//     }
//     else if (typeof item === 'object' && typeof item.age == shema && transform === false)
//     {
//       ind.push({age: item.age})
//     }
//   })

//   return ind;
// }

// let result = array_normalize(testData4, {age: 'float'}, true)
// console.log(result)

// 10 (1бал)
// Сделать функцию которая сможет делать срез данных с ассоциативного массива.

// Синтаксис: array_pluck(arr: array, path: string): any[]
// Пример:
// let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
// let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]


// function array_pluck(arr: Array<TestData3>, path: string): any[]{
//   const arrWithPath = 'arr'+path;

//   const resultArray = arr.map(item=>{
//     return eval('item.'+path)
//   })

//   return resultArray;
// }

// let result = array_pluck(testData3, 'skills.php')
// console.log(result)

// 11 (1бал)
// Сделать функцию которая возвращает уникальные элементы массива.

// Синтаксис: array_unique(arr: array): any[]
// Пример:
// let result = array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]

// function array_unique(arr: Array<number | string | boolean>): any{

//   const uniqueSet = new Set();
//   arr.forEach(item=>{
//     uniqueSet.add(item);
//   })

//   return uniqueSet;
// }

// let result = array_unique(testData.concat(testData2))
// console.log(result)

// 12 (1бал)
// Сделать функцию которая создает массив указанной длинны и заполняет его переданными значениями.

// Синтаксис: array_fill(lenght: number, value: any): any[]
// Пример: 
// let result = array_fill(5, 'string') // ['string', 'string', 'string', 'string', 'string']

// function array_fill(lenght: number, value: any): any[]{
//   return Array.apply(null, {length: lenght}).map(()=>value)
// }

// let result = array_fill(5, 'string')
// console.log(result)


// 13 (2 бала)
// Создать конструктор (без использования классов es6) Collection который позволяет манипулировать массивом. 
// Все функции должны быть преобразованы в модули СommonJS и подключенный из отдельных файлов Методы которые надо реализовать в коллекции: map, filter, 
// reduce - эти методы должны возвращать коллекцию с результатом не меняя старую коллекцию transform, sanitize - преобразует текущую коллекцию (аналоги map, filter) every, 
// indexOf - работают так же как и стандартные методы в массиве values, toArray - возвращает array toJSON, toQueryString, toString - возвращает значение в указанном формате isEmpty - 
// проверяет пустая коллекция или нет Статические методы которые надо реализовать в коллекции: make - создает коллекцию на основании переданного массива. map, filter, reduce - 
// эти методы должны возвращать коллекцию с результатом не меняя старую коллекцию every, indexOf - работают так же как и стандартные методы в массиве toJSON, toQueryString - 
// возвращает значение в указанном формате Свойства массива которые надо реализовать в коллекции: lenght

// Синтаксис статики: 
// Collection.make([arr: array = []]): Collection
// Collection.map(arr: array, callback: function): Collection
// Collection.filter(arr: array, callback: function): Collection
// Collection.reduce(arr: array, callback: function [, initial: any]): Collection
// Collection.every(arr: array, callback: function): void
// Collection.indexOf(arr: array, searchElement: string [, fromIndex: number = 0): number
// Collection.toJSON(arr: array): string
// Collection.toQueryString(arr: array): string
// Collection.isEmpty(arr: array): boolean
// Синтаксис методов объекта:
// objCollection.map(callback: function): Collection
// objCollection.filter(callback: function): Collection
// objCollection.reduce(callback: function [, initial: any]): Collection
// objCollection.transform(callback: function): Collection
// objCollection.sanitize(callback: function): Collection
// objCollection.every(callback: function): void
// objCollection.indexOf(searchElement: string [, fromIndex: number = 0): number
// objCollection.toJSON(): string
// objCollection.toQueryString(): string
// objCollection.toString(): string
// objCollection.isEmpty(): boolean
// Пример:
// let numbers = Collection.make([1, 2, 3, 4]);
// numbers.map(item => item * 2).filter(item => item < 2).toJSON() // "[4,6,8]"