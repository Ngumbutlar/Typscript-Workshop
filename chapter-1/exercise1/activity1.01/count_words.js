"use strict";
// Count the number of separate words within a string
function countWords(str) {
    const strSplit = str.split(/[-_\s]+/);
    let word_count = strSplit.length;
    return word_count;
}
console.log(countWords("War and Peace"));
console.log(countWords("catcher-in-the-rye"));
console.log(countWords("for_whom the-bell-tolls"));
