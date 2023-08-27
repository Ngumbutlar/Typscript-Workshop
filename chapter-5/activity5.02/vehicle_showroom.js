"use strict";
class Vehicle {
    constructor(name, wheels, bodyType) {
        this.name = name;
        this.wheels = wheels;
        this.bodyType = bodyType;
    }
    getName() {
        return this.name;
    }
    getProp() {
        return {
            name: this.name,
            wheels: this.wheels,
            bodyType: this.bodyType,
        };
    }
}
class Car extends Vehicle {
    constructor(name, wheels, bodyType, rideHeight) {
        super(name, wheels, bodyType);
        this.rideHeight = rideHeight;
    }
    getProp2() {
        return Object.assign(Object.assign({}, super.getProp), { rideHeight: this.rideHeight });
    }
}
class Truck extends Vehicle {
    constructor(name, wheels, bodyType, offroad) {
        super(name, wheels, bodyType);
        this.offRoad = offroad;
    }
    getProp3() {
        return Object.assign(Object.assign({}, super.getProp), { offroad: this.offRoad });
    }
}
class Suv extends Truck {
    constructor(name, wheels, bodyType, offRoad, roofRack, thirdrow) {
        super(name, wheels, bodyType, offRoad);
        this.roofRack = roofRack;
        this.thirdRow = thirdrow;
    }
    getProp4() {
        return Object.assign(Object.assign({}, super.getProp3), { roofRack: this.roofRack, thirdrow: this.thirdRow });
    }
}
const car = new Car('bluebird', 4, 'sedan', 14);
const truck = new Truck('bluebird', 4, 'sedan', true);
const suv = new Suv('xtrial', 4, 'box', true, true, true);
console.log(car);
console.log(truck);
console.log(suv);
