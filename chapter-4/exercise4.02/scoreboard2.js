"use strict";
class Team2 {
    constructor(name) {
        this.name = name;
    }
    generateLineup() {
        return "Lineup will go her ...";
    }
}
const astro = new Team2("Astros");
// console.log(astro.generateLineup());
console.log(astro.name);
const bluJays = new Team2("BlueJays");
// console.log(bluJays.generateLineup())
console.log(bluJays.name);
