//задача 1
// function spy(func) {
//     function wrapper(...args) {
//       wrapper.calls.push(args);
//       return func.apply(this, args);
//     }
//     wrapper.calls = [];
//     return wrapper;
//   }

//задача 2
// function delay(f, ms) {
//     return function() {
//       setTimeout(() => f.apply(this, arguments), ms);
//     };
//   }
//   let f1000 = delay(alert, 1000);
//   f1000("test");

//задача 3
// function debounce(f, ms) {
//     let isCooldown = false;
//     return function() {
//       if (isCooldown) return;
//       f.apply(this, arguments);
//       isCooldown = true;
//       setTimeout(() => isCooldown = false, ms);
//     };
//   }

//задача 4
// function throttle(func, ms) {
//     let isThrottled = false,
//       savedArgs,
//       savedThis
//     function wrapper() {
//       if (isThrottled) {
//         savedArgs = arguments;
//         savedThis = this;
//         return;
//       }

//       func.apply(this, arguments);

//       isThrottled = true;

//       setTimeout(function() {
//         isThrottled = false;
//         if (savedArgs) {
//           wrapper.apply(savedThis, savedArgs);
//           savedArgs = savedThis = null;
//         }
//       }, ms);
//     }
//     return wrapper;
//   }
