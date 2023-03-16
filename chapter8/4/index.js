//задача 1
// let dictionary = Object.create(null, {
//     toString: {
//       value() {
//         return Object.keys(this).join();
//       }
//     }
//   });
//   dictionary.apple = "Apple";
//   dictionary.__proto__ = "test";
//   for(let key in dictionary) {
//     alert(key);
//   }
//   alert(dictionary);

//задача 2
// function Rabbit(name) {
//     this.name = name;
//   }
//   Rabbit.prototype.sayHi = function() {
//     alert( this.name );
//   }
//   let rabbit = new Rabbit("Rabbit");
//   rabbit.sayHi();
//   Rabbit.prototype.sayHi();
//   Object.getPrototypeOf(rabbit).sayHi();
//   rabbit.__proto__.sayHi();
