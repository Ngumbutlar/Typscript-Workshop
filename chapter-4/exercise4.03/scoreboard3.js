"use strict";
// we'll add attributes of different types
class Team3 {
    constructor(name, players) {
        this.name = name;
        this.players = players;
    }
    generateLineUp() {
        return this.players.join(", ");
    }
}
const astroPlayers = ["Altuve", "Bregman", "Correa", "Springer"];
const astro = new Team3("Astros", astroPlayers);
console.log(astro.generateLineUp());
console.log(astro.name);
const blueJaysPlayer = ["Vlad", "Smoak", "Teller", "Sogard"];
const blueJays = new Team3("Blue Jays", blueJaysPlayer);
console.log(blueJays.generateLineUp());
console.log(blueJays.name);
