const title = prompt("Как называется ваш проект?");
const screenPrice = prompt("Сколько будет стоить данная работа?");
const rollback = 50;
const adaptive = confirm("Нужен ли адаптив на сайте?");
const screens = prompt("Какие типы экранов нужно разработать?");
const service2 = prompt("Какой дополнительный тип услуг нужен?");
const service1 = prompt("Какой дополнительный тип услуг нужен?");
const servicePrice1 = prompt("Сколько это будет стоить?");
const servicePrice2 = prompt("Сколько это будет стоить?");
const fullPrice = Number(screenPrice) + Number(servicePrice1) + Number(servicePrice2);
const servicePercentPrice = fullPrice - rollback;

console.log("полная стоимость - " + fullPrice, "откат посреднику - " + rollback);

if (fullPrice >= 30000) {
    console.log("Даем скидку 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
    console.log("Даем скидку 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
    console.log("Скидка не предусмотрена");
} else  {console.log("Что то пошло не так")};



// console.log(typeof title, typeof fullPrice, typeof adaptive);
// console.log(screens.length);
// console.log("Стоимость верстки " + screenPrice + " рублей");
// console.log("Стоимость разработки " + fullPrice + " рублей");
// console.log(screens.toLowerCase().split(", "));
// console.log(fullPrice * (rollback/100) + " %");