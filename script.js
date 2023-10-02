const buttonAddCar = document.querySelector('.add-car')
const buttonCreateCar = document.querySelector('.create-new-car')

class NewCar{ 
    constructor(body, suspension, transmission, gearbox){
        this.body = body;
        this.suspension = suspension;
        this.transmission = transmission;
        this.gearbox = gearbox
    }   
}

class Sedan extends NewCar {
    constructor() {
        super();
        this.doors = 4;
        this.trunk = 350;
        this.body = 'sedan'
    }
}
class Wagon extends NewCar {
    constructor() {
        super();
        this.doors = 4;
        this.trunk = 600;
        this.body = 'Wagon'
    }
}
class Coupe extends NewCar {
    constructor() {
        super();
        this.doors = 2;
        this.trunk = 300;
        this.body = 'sedCoupeBodyan'
    }
}
class HotHatch extends NewCar {
    constructor() {
        super();
        this.doors = 2;
        this.trunk = 450;
        this.body = 'HotHatch'
    }
}
