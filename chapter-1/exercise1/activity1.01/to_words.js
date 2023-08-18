"use strict";
// Return the words within a string
function toWords(str) {
    const words = str.split(/[-_\s]+/);
    return words;
}
console.log(toWords("War and Peace"));
console.log(toWords("catcher-in-the-rye"));
console.log(toWords("for_whom the-bell-tolls"));
