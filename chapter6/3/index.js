//задача 1
//0
//1

//задача 2
//да работать будет
//1
//2
//1

//задача 3
//Hello, John

//задача 4
// function sum(a) {
//     return function(b) {
//       return a + b;
//     };
//   }
//   alert( sum(1)(2) );
//   alert( sum(5)(-1) );

//задача 5
// function inBetween(a, b) {
//     return function(x) {
//       return x >= a && x <= b;
//     };
//   }
//   let arr = [1, 2, 3, 4, 5, 6, 7];
//   alert( arr.filter(inBetween(3, 6)) );

// function inArray(arr) {
//     return function(x) {
//       return arr.includes(x);
//     };
//   }
//   let arr = [1, 2, 3, 4, 5, 6, 7];
//   alert( arr.filter(inArray([1, 2, 10])) );

//задача 6
// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];
//   function byField(field) {
//     return (a, b) => a[field] > b[field] ? 1 : -1;
//   }
//   users.sort(byField('name'));
//   users.forEach(user => alert(user.name));
//   users.sort(byField('age'));
//   users.forEach(user => alert(user.name));

//задача 7
// function makeArmy() {
//     let shooters = [];
//     let i = 0;
//     while (i < 10) {
//       let j = i;
//       let shooter = function() {
//         alert( j );
//       };
//       shooters.push(shooter);
//       i++;
//     }
//     return shooters;
//   }
//   let army = makeArmy();
//   army[0]();
//   army[5]();
