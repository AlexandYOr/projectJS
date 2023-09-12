let title = prompt("Как называется ваш проект?");
const screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
const rollback = 50;
const adaptive = confirm("Нужен ли адаптив на сайте?");
const screens = prompt("Какие типы экранов нужно разработать?");
const service2 = prompt("Какой дополнительный тип услуг нужен?");
const service1 = prompt("Какой дополнительный тип услуг нужен?");
const servicePrice1 = Number(prompt("Сколько это будет стоить?"));
const servicePrice2 = Number(prompt("Сколько это будет стоить?"));


const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return "Даем скидку 10%";
    } else if (price >= 15000 && fullPrice < 30000) {
        return "Даем скидку 5%";
    } else if (price >= 0 && fullPrice < 15000) {
        return "Скидка не предусмотрена";
    } else {
        return "Что то пошло не так"
    };
};

const getAllServicePrices = function (firstPrice, secondPrice) {
    return firstPrice + secondPrice
}; // Function Expression
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(firstPrice, secondPrice) {
    return firstPrice + secondPrice;
}; //Function Declaration
const fullPrice = getFullPrice(screenPrice, allServicePrices);

const getCorrectName = function (name) {
    const splittedName = name.trim().split("");
    splittedName[0] = splittedName[0].toUpperCase();
    return splittedName.join("");
}
title = getCorrectName(title)



const getServicePercentPrices = (price, rollback) => price - rollback;
const servicePercentPrices = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
// console.log("полная стоимость - " + fullPrice, "откат посреднику - " + rollback);
console.log(getRollbackMessage(fullPrice));
console.log(screens);
console.log(servicePercentPrices);
// console.log(typeof title, typeof fullPrice, typeof adaptive);
// console.log(screens.length);
// console.log("Стоимость верстки " + screenPrice + " рублей");
// console.log("Стоимость разработки " + fullPrice + " рублей");
// console.log(screens.toLowerCase().split(", "));
// console.log(fullPrice * (rollback/100) + " %");