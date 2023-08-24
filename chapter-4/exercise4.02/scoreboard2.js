"use strict";
class Team2 {
    constructor(name) {
        this.name = name;
    }
    generateLineup() {
        return "Lineup will go her ...";
    }
}
const astros2 = new Team2("Astros");
// console.log(astros2.generateLineup());
console.log(astros2.name);
const bluJays = new Team2("BlueJays");
// console.log(bluJays.generateLineup())
console.log(bluJays.name);
