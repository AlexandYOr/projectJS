// переменные
let title;
let screenPrice;
const rollback = 50;
let adaptive;
let screens;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num))
};

//Функции
const asking = function () {
    title = getCorrectName(prompt("Как называется ваш проект?", "Калькулятор верстки"));
    screens = prompt("Какие типы экранов нужно разработать?", " Простые, сложные");
    adaptive = confirm("Нужен ли адаптив на сайте?");

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice));

    // while (!isNumber(screenPrice)) {
    //     screenPrice = prompt("Сколько будет стоить данная работа?");
    // };
}

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

// Function Expression
const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let servicePrice;
        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуг нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуг нужен?")
        };
        while (!isNumber(servicePrice)) {
            servicePrice = prompt("Сколько это будет стоить?");
        };
        sum += +servicePrice;
    }
    return sum
};


//Function Declaration
function getFullPrice(firstPrice, secondPrice) {
    return +firstPrice + +secondPrice;

};


function getCorrectName(name) {
    const splittedName = name.trim().split("");
    splittedName[0] = splittedName[0].toUpperCase();
    return splittedName.join("");
}
//стрелочная функция
const getServicePercentPrices = (price, rollback) => price - rollback;

//Вызов функций
asking()
const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const servicePercentPrices = getServicePercentPrices(fullPrice, rollback);


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

//Логи
console.log("allServicePrices", allServicePrices)
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