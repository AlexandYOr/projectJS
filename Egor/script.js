// for (let i = 1; i <= 20; i++) {
// console.log(i)
// };

// const splitedString = "computer".split(""); // создали массив
// const splitElement = []; // результат цикла

// splitedString.forEach((i) => {splitElement.unshift(i)
// });
// console.log(splitElement.join(""));

// const string = "computer";
// const arrayString = [];
// for (let i = string.length - 1; i >= 0; i--) {arrayString.push(string[i])
// };
// console.log(arrayString.join("").split("").reverse().join(""));

// for (i = 1; i <=15; i++) {
//     console.log(i % 2 == 0)
// }

const array = [11, 22, 33, 44, 55];
let arrayResult = 0;
array.forEach((arrayElement) => {
   arrayResult = arrayResult + arrayElement **2
});

console.log(arrayResult);

