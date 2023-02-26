//задача 1
//4

//задача 2
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// alert( styles.shift() );
// styles.unshift("Рэп", "Регги");

//задача 3
//на выходе получим undefined, так как функция ни чего не возращает,
//а alert выведет a,b,function(){alert( this );}

//задача 4
// const sumInput = () => {
//   const numbers = [0];
//   let value = prompt("Введите число", 0);
//   while (isFinite(value) && ![null, ""].includes(value)) {
//     numbers.push(+value);
//     value = prompt("Введите число", 0);
//   }
//   return numbers.reduce((t, v) => t + v);
// };

//задача 5
// const getMaxSubSum = (arr) => {
//   let maxSum = 0;
//   let partialSum = 0;
//  arr.forEach((value) => {
//     partialSum += value;
//     maxSum = Math.max(maxSum, partialSum);
//     if (partialSum < 0) partialSum = 0;
//   });
//   return maxSum;
// };
