class Parking {

    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    addCar(carModel, carNumber) {

        if (this.capacity <= this.vehicles.length) {
            throw new Error('Not enough parking space.');
        }

        let car = {
            carModel: carModel,
            carNumber: carNumber,
            payed: false
        };

        this.vehicles.push(car);
        return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }

    removeCar(carNumber) {
        let car = this.vehicles.find(car => car.carNumber === carNumber);
        if (car) {
            let index = this.vehicles.indexOf(car);
            if (car.payed === false) {
                throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
            } else {
                this.vehicles.splice(index, 1);
                return `${carNumber} left the parking lot.`;
            }

        } else {
            throw new Error('The car, you\'re looking for, is not found.');
        }
    }

    pay(carNumber) {
        let car = this.vehicles.find(car => car.carNumber === carNumber);
        if (car) {
            if (car.payed === false) {
                car.payed = true;
                return `${carNumber}\'s driver successfully payed for his stay.`;
            } else {
                throw new Error(`${carNumber}\'s driver has already payed his ticket.`);
            }
        } else {
            throw new Error(`${carNumber} is not in the parking lot.`);
        }
    }

    getStatistics(carNumber) {
            let car = this.vehicles.find(car => car.carNumber === carNumber);
            if (car) {
                let stringFlag =
                    car.payed === false ?
                    'Not payed' :
                    'Has payed';
                return `${car.carModel} == ${car.carNumber} - ${stringFlag}`;
            } else {
                let emptySlots = this.capacity - this.vehicles.length;
                let result = [`The Parking Lot has ${emptySlots} empty spots left.`];
                this.vehicles.sort((a, b) => a.carModel.localeCompare(b.carModel))
                    .forEach(car => {
                        let stringFlag = car.payed === false ?
                            'Not payed' :
                            'Has payed';
                        result.push(`${car.carModel} == ${car.carNumber} - ${stringFlag}`);
                    });
                return result.join('\n');
            }
        }
        /*car(carNumber) {
            return car = this.vehicles.find(car => car.carNumber === carNumber);
        }*/
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());
console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));