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
    rollback: 0,
    adaptive: true,
    count: 0,
    screens: [],
    servicesPercent: {},
    servicesNumber: {},
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrices: 0,
    init: function () {
        appData.addTitle()
        rollbackInputType.addEventListener('change', appData.rollbackChangeValue)
        buttonCalc.addEventListener('click', appData.validationForm)
        buttonPlus.addEventListener('click', appData.addScreenBlock)
    },
    addTitle: function () {
        document.title = title.textContent

    },
validationForm: function () {
    appData.addScreens()
    console.log(appData.screens)
    for (let i = 0; i < appData.screens.length; i++) {
        if (appData.screens[i].name === "Тип экранов") {
            alert("Ошибка")
        } else if (appData.screens[i].price === 0) {
            alert("Ошибка")
        } else {
            appData.addServices();
            appData.addPrices();
            appData.showResult();
        }
    }

},
    rollbackChangeValue: function () {
        appData.rollback = rollbackInputType.value
        rollbackSpan.textContent = rollbackInputType.value + "%"
    },
    start: function () {
        // appData.addScreens()
        // appData.addServices()
        // appData.addPrices();
        // console.log(appData)
        // appData.showResult()
    },
    showResult: function () {
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrices
        totalCount.value = appData.count
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
            appData.count += 1
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
        appData.servicePercentPrices = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))

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