"use strict";
const pickupTruck = {
    color: "red",
    doors: 4,
    wheels: 4,
    fourWheelDrive: true,
    doubleCab: true,
    winch: true
};
function TruckBuilder(pickupTruck) {
    return pickupTruck;
}
console.log(TruckBuilder(pickupTruck));
