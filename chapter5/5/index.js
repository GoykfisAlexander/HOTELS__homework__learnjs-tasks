//задача 1
// const camelize = (str) =>
//   str
//     .split("-")
//     .map((e, i) => (!i ? e : e.replace(e[0], e[0].toUpperCase())))
//     .join("");

//задача 2
// const filterRange = (arr, a, b) => arr.filter((e) => e >= a && e <= b);

//задача 3
// const filterRangeInPlace = (arr, a, b) => {
//   filterArr = arr.filter((e) => e >= a && e <= b);
//   arr.length = 0;
//   arr.push(...filterArr);
// };

//задача 4
//arr.sort((a, b) => b - a);

//задача 5
// const copySorted = (arr) => [...arr].sort();

//задача 6
// function Calculator() {
//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//     };
//     this.calculate = function(str) {
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
//       return this.methods[op](a, b);
//     }
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }

//задача 7
//users.map(user => user.name);

//задача 8
// users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
//   }));

//задача 9
//const sortByAge = (arr) => arr.sort((a, b) => (a.age > b.age ? 1 : -1));

//задача 10
// const shuffle = (array) => array.sort(() => Math.random() - 0.5);

//задача 11
// const getAverageAge = (users) =>
//   users.reduce((prev, user) => prev + user.age, 0) / users.length;

//задача 12
// const unique=(arr)=>[...new Set(arr)]

//задача 13
// const groupById = (array) =>
//   array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {});
