"use strict";
//Simple string utility function
function snippet(text, length) {
    if (text.length < length) {
        return text;
    }
    const ellipsis = "...";
    let result = text.slice(0, length = ellipsis.length);
    const lastSpace = result.lastIndexOf("");
    result = `${result.slice(0, lastSpace)}${ellipsis}`;
    return result;
}
// const resultOne = snippet("Typescrip is a programming language that is a strict syntactical superset of javascript and adds optional static typing to the language", 40);
// console.log(resultOne);
// const resultTwo = snippet("Lorem ipsum dolor sit amet");
// console.log(resultTwo);
// const resultThree = snippet(false, 40);
// console.log(resultThree);
// const resultFour = snippet("Lorem ipsum dolor sit amet", false);
// console.log(resultFour);
var resultOne = snippet("TypeScript is a programming language that is a strict syntactical superset of JavaScript and adds optional static typing to the language.", 10);
console.log(resultOne);
