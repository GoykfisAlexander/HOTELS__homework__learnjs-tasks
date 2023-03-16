//задача 1
// document.body.firstElementChild;
// document.body.children[0];
// document.body.childNodes[1];

//задача 2
// да
// нет

//задача 3
// const table = document.body.firstElementChild;
// table.innerHTML = [1, 2, 3, 4, 5]
//   .map(
//     (e, i, a) =>
//       `<tr>${a
//         .map(
//           (el, j) =>
//             `<td style="background:${i === j ? "red" : ""}">${el}:${e}</td>`
//         )
//         .join("")}</tr>`
//   )
//   .join("");
