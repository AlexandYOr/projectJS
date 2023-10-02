const buttonAddCar = document.querySelector('.add-car')
const allTypeBody = document.querySelector('#all-type-body')
const engine = document.querySelector('#engine')
const engineType = document.querySelector('#type-of-engine')
const allSuspension = document.querySelector('#all-suspension')
const allTransmission = document.querySelector('#all-transmission')
const allGearbox = document.querySelector('#all-gearbox')

class NewCar{ 
    constructor(body, suspension, transmission, gearbox){
        this.body = body;
        this.suspension = suspension;
        this.transmission = transmission;
        this.gearbox = gearbox
    }   
}

class Sedan extends NewCar{
    constructor(body, suspension, transmission, gearbox, engine, engineType) {
        super()
        this.body = body;
        this.suspension = suspension;
        this.transmission = transmission;
        this.gearbox = gearbox
        this.engine = engine;
        this.engineType = engineType; 
    }
}
class Wagon extends NewCar{
    constructor(body, suspension, transmission, gearbox, engine, engineType) {
        super()
        this.body = body;
        this.suspension = suspension;
        this.transmission = transmission;
        this.gearbox = gearbox
        this.engine = engine;
        this.engineType = engineType; 
    }
}
class Coupe extends NewCar{
    constructor(body, suspension, transmission, gearbox, engine, engineType) {
        super()
        this.body = body;
        this.suspension = suspension;
        this.transmission = transmission;
        this.gearbox = gearbox
        this.engine = engine;
        this.engineType = engineType; 
    }
}
class HotHatch extends NewCar{
    constructor(body, suspension, transmission, gearbox, engine, engineType) {
        super()
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
    console.log(e)
}

const clearForm = function() {
    allTypeBody.selectedIndex = 0
    engine.selectedIndex = 0
    engineType.selectedIndex = 0
    allSuspension.selectedIndex = 0
    allTransmission.selectedIndex = 0
    allGearbox.selectedIndex = 0
    engine.style.display = 'none'
    engineType.style.display = 'none'
}

const createNewCar = function() {
    const body = allTypeBody.value
    const selectedEngine = engine.value
    const selectedEngineType = engineType.value
    const suspension = allSuspension.value
    const transmission = allTransmission.value
    const gearbox = allGearbox.value
    let myNewCar;
    switch (body) {
        case 'Sedan':
            myNewCar = new Sedan(body, suspension, transmission, gearbox, selectedEngine, selectedEngineType)
            break;
        case 'Wagon':
            myNewCar = new Wagon(body, suspension, transmission, gearbox, selectedEngine, selectedEngineType)
            break;
        case 'Coupe':
            myNewCar = new Coupe(body, suspension, transmission, gearbox, selectedEngine, selectedEngineType)
            break;
        case 'HotHatch':
            myNewCar = new HotHatch(body, suspension, transmission, gearbox, selectedEngine, selectedEngineType)
            break;
    }
    console.log(myNewCar)
    clearForm()
}



allTypeBody.addEventListener('change',typeBodySelect)
buttonAddCar.addEventListener('click', createNewCar)