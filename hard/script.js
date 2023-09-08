const num = 266219;
const numText = num.toString();
const arrayNum = numText.split("");
let result = 1;

arrayNum.forEach((arrayElement) => result = result * arrayElement)
console.log(result)

// for (let i = 0;  i < arrayNum.length; i++) {
//     result = result * arrayNum[i]
// }
// console.log(result)

// let arrayIndex = 0; // выводит значение массива
// while (arrayIndex < arrayNum.length) {
//    result = result * arrayNum[arrayIndex];
//     ++arrayIndex;
// };
// const exponentiation = result ** 3;
// console.log(exponentiation.toString().slice(0 , 2));