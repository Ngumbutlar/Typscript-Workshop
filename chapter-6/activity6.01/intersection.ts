
type Motor = {
    color: string,
    doors: number,
    wheels: number,
    fourWheelDrive: boolean
}

type _Truck = {
    doubleCab: boolean,
    winch: boolean
}

type PickUpTruck = Motor & _Truck;
const pickupTruck: PickUpTruck = {
    color: "red",
    doors: 4,
    wheels: 4,
    fourWheelDrive: true,
    doubleCab: true,
    winch: true
}

function TruckBuilder(pickupTruck: PickUpTruck): PickUpTruck {
    return pickupTruck;
}
console.log(TruckBuilder(pickupTruck));