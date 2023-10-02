let garage = JSON.parse(localStorage.getItem('garage')) ?? []; // получение данных из локал сторэдж
const carName = document.querySelector('.car-name')
const buttonAddCar = document.querySelector('.add-car')
const allTypeBody = document.querySelector('#all-type-body')
const engine = document.querySelector('#engine')
const engineType = document.querySelector('#type-of-engine')
const allSuspension = document.querySelector('#all-suspension')
const allTransmission = document.querySelector('#all-transmission')
const allGearbox = document.querySelector('#all-gearbox')
const result = document.querySelector('.result')


// создаем класс
class NewCar{ 
    constructor(id, carName, body, suspension, transmission, gearbox){
        this.id = id 
        this.carName = carName;
        this.body = body;
        this.suspension = suspension;
        this.transmission = transmission;
        this.gearbox = gearbox
    }
    removeCar() {
        garage = garage.filter((car) => car.id !== this.id)
        localStorage.setItem('garage', JSON.stringify(garage))
        const carInPage = document.getElementById(this.id)
        carInPage.remove()
    } 
}
// наследники класса NewCar
class Sedan extends NewCar{
    constructor(id, carName, body, suspension, transmission, gearbox, engine, engineType) {
        this.id = id
        this.carName = carName;
        this.body = body;
        this.suspension = suspension;
        this.transmission = transmission;
        this.gearbox = gearbox
        this.engine = engine;
        this.engineType = engineType; 
    }
}
class Wagon extends NewCar{
    constructor(id, carName, body, suspension, transmission, gearbox, engine, engineType) {
        this.id = id
        this.carName = carName;
        this.body = body;
        this.suspension = suspension;
        this.transmission = transmission;
        this.gearbox = gearbox
        this.engine = engine;
        this.engineType = engineType; 
    }
}
class Coupe extends NewCar{
    constructor(id, carName, body, suspension, transmission, gearbox, engine, engineType) {
        this.id = id
        this.carName = carName;
        this.body = body;
        this.suspension = suspension;
        this.transmission = transmission;
        this.gearbox = gearbox
        this.engine = engine;
        this.engineType = engineType; 
    }
}
class HotHatch extends NewCar{
    constructor(id, carName, body, suspension, transmission, gearbox, engine, engineType) {
        this.id = id
        this.carName = carName;
        this.body = body;
        this.suspension = suspension;
        this.transmission = transmission;
        this.gearbox = gearbox
        this.engine = engine;
        this.engineType = engineType; 
    }
}

const typeBodySelect = function(e){
    if (e.target.value) {
        engine.style.display = 'flex'
        engineType.style.display = 'flex'
    } else {
        engine.style.display = 'none'
        engineType.style.display = 'none'
    }
}

const clearForm = function() {
    carName.value = ''
    allTypeBody.selectedIndex = 0
    engine.selectedIndex = 0
    engineType.selectedIndex = 0
    allSuspension.selectedIndex = 0
    allTransmission.selectedIndex = 0
    allGearbox.selectedIndex = 0
    engine.style.display = 'none'
    engineType.style.display = 'none'
}
// функция в которую мы передаем свойство, возвращаем универсальный элемент
const createCarProperty = function(propertyValue = '-') {
    const newPropertyElement = document.createElement('span')
    newPropertyElement.classList.add('table-value')
    newPropertyElement.textContent = propertyValue
    return newPropertyElement
}
// функция в которую мы передаем экземпляр(instance) класса (в нашем случае myNewCar).
// функция создает новые элементы на странице
const addCarToGarage = function(car) {
    const newCarInGarage = document.createElement('div') // обертка
    newCarInGarage.id = car.id
    newCarInGarage.classList.add('table-row')

    const newCarInGarageName = createCarProperty(car.carName)
    const newCarInGarageBody = createCarProperty(car.body)
    const newCarInGarageEngine = createCarProperty(car.engine)
    const newCarInGarageEngineType = createCarProperty(car.engineType)
    const newCarInGarageSuspession = createCarProperty(car.suspension)
    const newCarInGarageTransmission = createCarProperty(car.transmission)
    const newCarInGarageGearbox = createCarProperty(car.gearbox)
    const deleteCarFromGarage = document.createElement('button')
    deleteCarFromGarage.classList.add('delete-car')
    deleteCarFromGarage.textContent = 'да'
    deleteCarFromGarage.addEventListener('click', car.removeCar.bind(car))
    newCarInGarage.append(newCarInGarageName, newCarInGarageBody, newCarInGarageSuspession, newCarInGarageGearbox, newCarInGarageTransmission, newCarInGarageEngine, newCarInGarageEngineType, deleteCarFromGarage)
    result.append(newCarInGarage)
}
//функция в которую мы передаем свойства сущности(автомобиля в нашем случае)
//функция возвращает экземпляр(instance) класса
const createClassFromValues = function(carValues) {
    const {id, carName, body, suspension, transmission, gearbox, engine, engineType} = carValues; //деструктуризация
    let myNewCar;
    switch (body) {
        case 'Sedan':
            myNewCar = new Sedan(id, carName, body, suspension, transmission, gearbox, engine, engineType)
            break;
        case 'Wagon':
            myNewCar = new Wagon(id, carName, body, suspension, transmission, gearbox, engine, engineType)
            break;
        case 'Coupe':
            myNewCar = new Coupe(id, carName, body, suspension, transmission, gearbox, engine, engineType)
        case 'HotHatch':
            myNewCar = new HotHatch(id, carName, body, suspension, transmission, gearbox, engine, engineType)
            break;
        default: 
            myNewCar = new NewCar(id, carName, body, suspension, transmission, gearbox)
            break;
    }
    return myNewCar
}
//функция в которую мы передаем массив с экземплярами(instances) классов
//функция возвращает уникальный id.
const calculateNewId = function(garage) {
    const carIds = garage.map((car) => {
        return car.id})
    const highestId = carIds.length ? Math.max(...carIds) : 0
    return highestId + 1
}
//колбэк для слушателя кнопки "В гараж"
//функция получает значения из инпутов
//функция создает инстанс класса используя функцию createClassFromValues
//функция добавляет новый экземпляр в массив, локальное хранилище и на страницу.
//функция возвращает все импуты в первоначальный вид 
const createNewCar = function() {
    const id = calculateNewId(garage)
    const setCarName = carName.value
    const body = allTypeBody.value
    const selectedEngine = engine.value
    const selectedEngineType = engineType.value
    const suspension = allSuspension.value
    const transmission = allTransmission.value
    const gearbox = allGearbox.value
    const myNewCar = createClassFromValues({id, carName: setCarName, body, suspension, transmission, engine: selectedEngine, engineType: selectedEngineType, gearbox})
    garage.push(myNewCar)
    localStorage.setItem('garage', JSON.stringify(garage))
    addCarToGarage(myNewCar)
    clearForm()
}
//колбэк для слушателя DOMContentLoaded
//функция изменяет массив свойств из локального хранилища на массив экземпляров классов при помощи функции createClassFromValues
//функция перебирает новый массив экземпляров классов и для каждого элемента массива применяет функцию addCarToGarage
const renderGarage = function() {
    garage = garage.map(createClassFromValues); //перебирает массив с последующим изменением элементов массива, возвращает измененный массив
    garage.forEach(addCarToGarage)
}

allTypeBody.addEventListener('change',typeBodySelect)
buttonAddCar.addEventListener('click', createNewCar)
document.addEventListener('DOMContentLoaded', renderGarage)