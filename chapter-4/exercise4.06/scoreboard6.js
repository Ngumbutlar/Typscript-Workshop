"use strict";
class Scoreboard {
    constructor(args) {
        this.homeTeam = args.homeTeam;
        this.awayTeam = args.awayTeam;
        this.date = args.date;
    }
    scoreboardHtml() {
        return `
        <h1>${this.date}</h1>
        <h2>${this.homeTeam.name}</h2>
        <div>${this.homeTeam.generateLineUp()}</div>
        <h2>${this.awayTeam.name}</h2>
        <div>${this.awayTeam.generateLineUp()}</div>
        `;
    }
}
class Team6 {
    constructor(name, players) {
        this.name = name;
        this.players = players;
    }
    generateLineUp() {
        const playersWithOrderNumber = this.players.map((player, idx) => {
            return `<div>${idx + 1} - ${player}</div>`;
        });
        return playersWithOrderNumber.join("");
    }
}
const astroPlayers4 = ["Altuve", "Bregman", "Correa", "Springer"];
const astros6 = new Team6("Astros", astroPlayers4);
// console.log(astros5.generateLineUp());
const blueJaysPlayers3 = ["Vlad", "Smoak", "Tellez", "Sogard"];
const blueJays3 = new Team6("Blue Jays", blueJaysPlayers3);
//console.log(blueJays.generateLineup());
const todaysGame = new Scoreboard({
    date: "5/24/19",
    homeTeam: astros6,
    awayTeam: blueJays3
});
console.log(todaysGame.scoreboardHtml());
