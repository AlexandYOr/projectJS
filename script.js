// переменные
// let title
// let screenPrice
// const rollback = 50
// let adaptive
// let screens
// let service1
// let service2

const appData = {
    title: '',
    screenPrice: 0,
    rollback: 50,
    adaptive: true,
    screens: '',
    service1: '',
    service2: '',
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrices: 0,
    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.servicePercentPrices = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.logger()
    },
    asking: function () {
        appData.title = appData.getCorrectName(prompt("Как называется ваш проект?", "Калькулятор верстки"));
        appData.screens = prompt("Какие типы экранов нужно разработать?", " Простые, сложные");
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");

        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice));
    },
    isNumber: function (num) {
        if (num === null) {
            return true
        }
        return !isNaN(parseFloat(num)) && isFinite(num) && !num.includes(" ");

    },
    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return "Даем скидку 10%";
        } else if (price >= 15000 && appData.fullPrice < 30000) {
            return "Даем скидку 5%";
        } else if (price >= 0 && appData.fullPrice < 15000) {
            return "Скидка не предусмотрена";
        } else {
            return "Что то пошло не так"
        };
    },
    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let servicePrice;
            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуг нужен?")
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуг нужен?")
            };
            while (!appData.isNumber(servicePrice)) {
                servicePrice = prompt("Сколько это будет стоить?");
            };
            sum += +servicePrice;
        }
        return sum
    },
    getFullPrice: function (firstPrice, secondPrice) {
        return +firstPrice + +secondPrice;
    },
    getCorrectName: function (name) {
        const splittedName = name.trim().split("");
        splittedName[0] = splittedName[0].toUpperCase();
        return splittedName.join("");
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    logger: function () {
        for (let k in appData) {
            console.log(k + " " + appData[k])
        }
    }
}



//Вызов функций
appData.start()


//Логи
// console.log("appData.allServicePrices", appData.allServicePrices)
// console.log("полная стоимость - " + appData.fullPrice, "откат посреднику - " + rollback);
// console.log(appData.getRollbackMessage(appData.fullPrice));
// console.log(screens);
// console.log(appData.servicePercentPrices);
// console.log(typeof title, typeof appData.fullPrice, typeof adaptive);
// console.log(screens.length);
// console.log("Стоимость верстки " + screenPrice + " рублей");
// console.log("Стоимость разработки " + appData.fullPrice + " рублей");
// console.log(screens.toLowerCase().split(", "));
// console.log(appData.fullPrice * (rollback/100) + " %");
// console.log(appData.fullPrice)