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

const showTypeOf = function (variable) {
    console.log(variable, typeof variable)

}

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
}
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("полная стоимость - " + fullPrice, "откат посреднику - " + rollback);
// console.log(typeof title, typeof fullPrice, typeof adaptive);
// console.log(screens.length);
// console.log("Стоимость верстки " + screenPrice + " рублей");
// console.log("Стоимость разработки " + fullPrice + " рублей");
// console.log(screens.toLowerCase().split(", "));
// console.log(fullPrice * (rollback/100) + " %");