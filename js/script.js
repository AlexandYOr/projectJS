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
        this.addTitle()
        rollbackInputType.addEventListener('change', this.rollbackChangeValue.bind(this))
        buttonCalc.addEventListener('click', this.validationForm.bind(this))
        buttonPlus.addEventListener('click', this.addScreenBlock)
        buttonReset.addEventListener('click', this.reset.bind(this))
    },
    addTitle: function () {
        document.title = title.textContent

    },
    validationForm: function () {
        this.addScreens()
        for (let i = 0; i < this.screens.length; i++) {
            if (this.screens[i].name === "Тип экранов") {
                alert("Ошибка")
            } else if (this.screens[i].price === 0) {
                alert("Ошибка")
            } else {
                this.start()
            }
        }

    },
    start: function () {
        this.addServices()
        this.addPrices();
        this.showResult();
        this.disableForm();
    },
    reset: function () {
        this.resetResult();
        this.resetAllScreens();
        this.resetServices();
        this.resetAllValue();
        this.resetRollbackValue();
        buttonCalc.style.display = '';
        buttonReset.style.display = 'none'
    },
    disableForm: function () {
        screens = document.querySelectorAll('.screen')
        screens.forEach((screen) => {
            screen.querySelector('select').disabled = true
            screen.querySelector('input').disabled = true
        });
        buttonPlus.disabled = true;
        buttonCalc.style.display = 'none';
        buttonReset.style.display = ''
    },

    //Результаты и 
    showResult: function () {
        total.value = this.screenPrice
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = this.fullPrice
        totalCountRollback.value = this.servicePercentPrices
        totalCount.value = this.count
    },
    resetResult: function () {
        total.value = 0;
        totalCountOther.value = 0;
        fullTotalCount.value = 0;
        totalCountRollback.value = 0;
        totalCount.value = 0;
    },
    resetAllValue: function () {
        this.screenPrice = 0;
        this.rollback = 0;
        this.count = 0;
        this.servicePricesPercent = 0;
        this.servicePricesNumber = 0;
        this.fullPrice = 0;
        this.servicePercentPrices = 0;
    },

    //Типы экранов и кол-во
    addScreens: function () {
        screens = document.querySelectorAll('.screen')
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent
            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
            this.count += 1
        });
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)

    },
    resetAllScreens: function () {
        buttonPlus.disabled = false;
        this.screens = [];
        screens.forEach((screen, index) => {
            if (index > 0) {
                screen.remove()
                return
            };
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            select.selectedIndex = 0
            input.value = ''
            select.disabled = false
            input.disabled = false
        });
    },


    // Чекбоксы с доп. услугами
    addServices: function () {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }
        })
        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    resetServices: function () {
        otherItemsPercent.forEach((item) => {
            item.querySelector('input[type=checkbox]').checked = false
        })
        otherItemsNumber.forEach((item) => {
            item.querySelector('input[type=checkbox]').checked = false
        })

    },
    //Откат
    rollbackChangeValue: function () {
        this.rollback = rollbackInputType.value
        rollbackSpan.textContent = rollbackInputType.value + "%"
    },
    resetRollbackValue: function() {
        rollbackInputType.value = 0
        rollbackSpan.textContent = rollbackInputType.value + "%"
    },
    //Расчеты
    addPrices: function () {
        this.screenPrice = this.screens.reduce((value, screen) => {
            return value + +screen.price
        }, 0)
        for (let k in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[k]
        }
        for (let k in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[k] / 100)
        }
        this.fullPrice = + this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
        this.servicePercentPrices = this.fullPrice - (this.fullPrice * (this.rollback / 100))

    },
    getServicePercentPrices: function () {
        this.servicePercentPrices = this.fullPrice - (this.fullPrice * (this.rollback / 100))
    },
    logger: function () {
        console.log(this.screens)
        console.log(this.servicePercentPrices)
        console.log(this.screenPrice)
    }
}

appData.init()