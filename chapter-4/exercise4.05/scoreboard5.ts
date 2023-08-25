// Generating HTML code


class Team5{
    players: string[];

    constructor(players: string[]){
        this.players = players;
    }
    generateLineUp(): string{
        const playersWithOrderNumber =
        this.players.map((player, idx) =>{
            return `<div>${idx + 1} - ${player}</div>`;
        });
        return playersWithOrderNumber.join("");
    }
}

const astroPlayers3 = ["Altuve", "Bregman", "Correa", "Springer"];
const astros5 = new Team5(astroPlayers3);
console.log(astros5.generateLineUp());
