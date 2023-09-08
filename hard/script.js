const num = 266219;
const numText = num.toString();
const arrayNum = numText.split("");
let arrayIndex = 0; // выводит значение массива
let result = 1;
while (arrayIndex < arrayNum.length) {
   result = result * arrayNum[arrayIndex];
    ++arrayIndex;
};
const exponentiation = result ** 3;
console.log(exponentiation.toString().slice(0 , 2));

