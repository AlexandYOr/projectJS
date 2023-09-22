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

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screenPrice: 0,
    rollback: 50,
    adaptive: true,
    screens: [],
    servicesPercent: {},
    servicesNumber: {},
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrices: 0,
    init: function () {
        appData.addTitle()
        buttonCalc.addEventListener('click', appData.start)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
    },
    addTitle: function () {
        document.title = title.textContent

    },
    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices();
        console.log(appData)
        appData.showResult()
    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen')
        screens.forEach(function (screen, index) {
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
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)

    },

    addPrices: function () {
        appData.screenPrice = appData.screens.reduce(function (value, screen) {
            return value + +screen.price
        }, 0)
        for (let k in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[k]
        }
        for (let k in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[k] / 100)
        }
        appData.fullPrice = + appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

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
    getServicePercentPrices: function () {
        appData.servicePercentPrices = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    logger: function () {
        console.log(appData.screens)
        console.log(appData.servicePercentPrices)
        console.log(appData.screenPrice)
    }
}

appData.init()