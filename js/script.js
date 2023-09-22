// переменные
// let title
// let screenPrice
// const rollback = 50
// let adaptive
// let screens
// let service1
// let service2
const title = document.getElementsByTagName('h1')[0];
const buttonCalc = document.getElementsByClassName('handler_btn')[0];
const buttonReset = document.getElementsByClassName('handler_btn')[1];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const rollbackInputType = document.querySelector('.rollback > div > input[type="range"]');
const rollbackSpan = document.querySelector('.rollback > div > span.range-value');
const totalInput = document.getElementsByClassName('total-input')
let screens = document.querySelectorAll('.screen')
 



const appData = {
    title: '',
    screenPrice: 0,
    rollback: 50,
    adaptive: true,
    screens: [],
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrices: 0,
    init: function () {
        appData.addTitle()
        buttonCalc.addEventListener('click', appData.start)
    },
    addTitle: function () {
        document.title = title.textContent

    },
    start: function () {
        appData.addScreens()
        // appData.asking();
        // appData.addPrices();
        // appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        // appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        // appData.logger()

    },

    addScreens: function() {
        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            appData.screens.push({
                id: index, 
                name: selectName, 
                price: +select.value * +input.value
            });

            console.log();
        });
        console.log(appData.screens)
    },
    asking: function() {
        appData.title = appData.getCorrectName(prompt("Как называется ваш проект?", "Калькулятор верстки"));
        while (appData.isNumber(appData.title)) {
            alert("В наименовании проекта должны быть буква(ы)!")
            appData.title = appData.getCorrectName(prompt("Как называется ваш проект?", "Калькулятор верстки"));
        }

        for (let i = 0; i < 2; i++) {
            let name = appData.getCorrectName(prompt("Какие типы экранов нужно разработать?"));
            while (appData.isNumber(name)) {
                alert("В наименовании экранов должны быть слова!")
                name = appData.getCorrectName(prompt("Какие типы экранов нужно разработать?"));
            };
            let price = 0;

            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price })
        };

        for (let i = 0; i < 2; i++) {
            let name = appData.getCorrectName(prompt("Какой дополнительный тип услуг нужен?"))
            while (appData.isNumber(name)) {
                alert("В наименовании типа услуг должны быть слова!")
                name = appData.getCorrectName(prompt("Какой дополнительный тип услуг нужен?"));
            };
            let price;
            while (!appData.isNumber(price)) {
                price = prompt("Сколько это будет стоить?");
            };
            appData.services[name + "_" + i] = +price
        };
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    addPrices: function () {
        appData.screenPrice = appData.screens.reduce(function (value, screen) {
            return value + +screen.price
        }, 0)
        for (let k in appData.services) {
            appData.allServicePrices += appData.services[k]
        }

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
    getFullPrice: function (firstPrice, secondPrice) {
        appData.fullPrice = +firstPrice + +secondPrice;
    },
    getCorrectName: function (name) {
        const splittedName = name.trim().split("");
        splittedName[0] = splittedName[0].toUpperCase();
        return splittedName.join("");
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrices = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    logger: function () {
        // for (let k in appData) {
        //     console.log(k + " " + appData[k])
        // }
        console.log(appData.screens)
        console.log(appData.servicePercentPrices)
        console.log(appData.screenPrice)
    }
}



//Вызов функций
appData.init()


// Логи
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