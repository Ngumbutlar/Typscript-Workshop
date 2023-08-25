"use strict";
// Generating HTML code
class Team5 {
    constructor(players) {
        this.players = players;
    }
    generateLineUp() {
        const playersWithOrderNumber = this.players.map((player, idx) => {
            return `<div>${idx + 1} - ${player}</div>`;
        });
        return playersWithOrderNumber.join("");
    }
}
const astroPlayers3 = ["Altuve", "Bregman", "Correa", "Springer"];
const astros5 = new Team5(astroPlayers3);
console.log(astros5.generateLineUp());
