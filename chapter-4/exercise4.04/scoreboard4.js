"use strict";
class Team4 {
    constructor(args) {
        this.name = args.name;
        this.players = args.players;
    }
    generateLineUp() {
        return this.players.join(", ");
    }
}
const astroPlayers2 = ["Altuve", "Bregman", "Correa", "Springer"];
const astros4 = new Team4({
    name: "Astros",
    players: astroPlayers2
});
console.log(astros4.generateLineUp());
console.log(astros4.name);
const blueJaysPlayer2 = ["Vlad", "Smoak", "Teller", "Sogard"];
const blueJays2 = new Team4({
    name: "Blue Jays",
    players: blueJaysPlayer2
});
console.log(blueJays2.generateLineUp());
console.log(blueJays2.name);
