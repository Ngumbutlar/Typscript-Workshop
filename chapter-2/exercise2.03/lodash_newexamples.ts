// Basketball Lineup Application

import _ = require("lodash");

const playerNames = [
    "Springer",
    "Bregman",
    "Altuve",
    "correa",
    "Brantley",
    "White",
    "Gonzalez",
    "Kemp",
    "Reddick"
];

const lineupOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(_.zip(lineupOrder, playerNames));