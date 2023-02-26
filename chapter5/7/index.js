//задача 1
//const unique=(arr)=> [...new Set(arr)];

//задача 2
// const aclean = (arr) => {
//   const map = new Map();
//   arr.forEach((e) => {
//     map.set(e.toLowerCase().split("").sort().join(""), e);
//   });
//   return [...map.keys()];
// };

//задача 3
//let map = new Map();
//map.set("name", "John");
//let keys = map.keys();
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
//keys.push("more"); //keys является объектом, а не массивом,
//поэтому отсутствует метод push.
// Мы можем преобразовать keys в массив-
//let keys= Array.from(map.keys())||[...map.keys()]
