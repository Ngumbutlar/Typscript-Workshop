"use strict";
class BasketBallGame {
    constructor(teamName1, teamName2) {
        this.team1 = { score: 0, name: teamName1 };
        this.team2 = { score: 0, name: teamName2 };
    }
    getScore() {
        return `${this.team1.score}: ${this.team2.score}`;
    }
    UpdateScore(byPoints, updateTeam1) {
        if (updateTeam1) {
            this.team1.score += byPoints;
        }
        else {
            this.team2.score += byPoints;
        }
    }
}
const game = new BasketBallGame("LA Lakers", "Boston Celtics");
game.UpdateScore(3, true);
game.UpdateScore(2, false);
game.UpdateScore(2, true);
game.UpdateScore(2, false);
game.UpdateScore(2, false);
game.UpdateScore(2, true);
game.UpdateScore(2, false);
console.log(game.getScore());
