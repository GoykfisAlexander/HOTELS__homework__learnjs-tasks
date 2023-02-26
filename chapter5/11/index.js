//задача 1
// let date = new Date(2012, 1, 20, 3, 12);
// alert( date );

//задача 2
// const getWeekDay = (date) =>
//   ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"][date.getDay()];

//задача 3
// const getLocalDay=(date)=> date.getDay()?date.getDay():7

//задача 4
// const getDateAgo = (date, days) => new Date(date - days * 864e5).getDate();

//задача 5
// const getLastDayOfMonth=(year, month)=> new Date(year, month + 1, 0).getDate();

//задача 6
// const getSecondsToday = () =>
//   new Date()
//     .toLocaleTimeString()
//     .split(":")
//     .reduce((t, v, i) => t + v * [3600, 60, 1][i], 0);

//задача 7
// const getSecondsToTomorrow = () =>
//   86400 -
//   new Date()
//     .toLocaleTimeString()
//     .split(":")
//     .reduce((t, v, i) => t + v * [3600, 60, 1][i], 0);

//задача 8
// const formatDate = (date) => {
//   let result = date.toLocaleString();
//   const difference = Math.floor((new Date() - date) / 1000);
//   [
//     `${Math.floor(difference / 60)} мин. назад`,
//     `${difference} сек. назад`,
//     "прямо сейчас",
//   ].forEach((e, i) => {
//     if ([3600, 60, 1][i] > difference) {
//       result = e;
//     }
//   });
//   return result;
// };
