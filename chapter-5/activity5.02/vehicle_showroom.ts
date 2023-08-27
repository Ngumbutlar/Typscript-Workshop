
class Vehicle {
    private name: string;
    wheels: number;
    bodyType: string

    constructor(
        name: string,
        wheels: number,
        bodyType: string,
    ) {
        this.name = name;
        this.wheels = wheels;
        this.bodyType = bodyType;

    }

    protected getName(): string {
        return this.name
    }

    getProp() {
        return {
            name: this.name,
            wheels: this.wheels,
            bodyType: this.bodyType,
        }
    }


}

class Car extends Vehicle {
    rideHeight: number;

    constructor(name: string, wheels: number, bodyType: string, rideHeight: number) {
        super(name, wheels, bodyType)
        this.rideHeight = rideHeight;
    }

    getProp2() {
        return {
            ...super.getProp,
            rideHeight: this.rideHeight
        }
    }

}

class Truck extends Vehicle {
    offRoad: boolean;

    constructor(name: string, wheels: number, bodyType: string, offroad: boolean) {
        super(name, wheels, bodyType)
        this.offRoad = offroad;
    }

    getProp3() {
        return {
            ...super.getProp,
            offroad: this.offRoad
        }
    }
}

class Suv extends Truck {
    roofRack: boolean;
    thirdRow: boolean;

    constructor(name: string, wheels: number, bodyType: string, offRoad: boolean, roofRack: boolean, thirdrow: boolean) {
        super(name, wheels, bodyType, offRoad)
        this.roofRack = roofRack;
        this.thirdRow = thirdrow;
    }

    getProp4() {
        return {
            ...super.getProp3,
            roofRack: this.roofRack,
            thirdrow: this.thirdRow
        }
    }
}

const car = new Car('bluebird', 4, 'sedan', 14);
const truck = new Truck('bluebird', 4, 'sedan', true);
const suv = new Suv('xtrial', 4, 'box', true, true, true);

console.log(car);
console.log(truck);
console.log(suv);