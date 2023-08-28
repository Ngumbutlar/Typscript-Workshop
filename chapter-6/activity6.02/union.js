"use strict";
class Shipping {
    Process(pack) {
        //check package type
        if (pack.type === "land") {
            return this.ToLand(pack);
        }
        else {
            return this.ToAir(pack);
        }
    }
    ToAir(pack) {
        pack.label = "air cargo";
        return pack;
    }
    ;
    ToLand(pack) {
        pack.label = "land cargo";
        return pack;
    }
    ;
}
const airPack = {
    height: 5,
    weight: 10,
    type: "air",
};
const landPack = {
    height: 5,
    weight: 10,
    type: "land",
};
const shipping = new Shipping();
console.log(shipping.Process(airPack));
console.log(shipping.Process(landPack));
