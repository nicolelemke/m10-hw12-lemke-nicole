//Create Car Class

class Car {
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year 
    }
    honk() {
        console.log('BEEP BEEP!')
    }
    performMaintenance() {
        setTimeout(function() {
        console.log('maintenance complete')
        }, 3000)
    }
}

//Create Variable

var mySweetRide = new Car ('Pontiac', 'Fiero', 1988)

//called methods

mySweetRide.honk()
mySweetRide.performMaintenance()