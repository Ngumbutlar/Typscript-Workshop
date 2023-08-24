"use strict";
// function that takes a subject, verb and list of objects and return a grammatically correct sentence
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.arraytpObjectSegment = exports.sentence = void 0;
const sentence = (subject, verb, ...objects) => {
    return `${subject} ${verb} ${(0, exports.arraytpObjectSegment)(objects)}.`;
};
exports.sentence = sentence;
const arraytpObjectSegment = (words) => {
    if (words.length < 1) {
        return '';
    }
    if (words.length === 1) {
        return `${words[0]}`;
    }
    let segment = '';
    for (let i = 0; i < words.length; i++) {
        if (i === words.length - 1) {
            segment += `and ${words[i]}`;
        }
        else {
            segment += `${words[i]},`;
        }
    }
    return segment;
};
exports.arraytpObjectSegment = arraytpObjectSegment;
const capitalize = (sentence) => {
    return `${sentence.charAt(0).toUpperCase()}${sentence.slice(1).toLowerCase()}`;
};
exports.capitalize = capitalize;
// console.log(sentence('the cat', 'ate', 'apples', 'cheese', 'pancake'));
// console.log(sentence('the cat', 'ate', 'slept', 'all day'));
// console.log(sentence('the cat', 'ate', 'sneezed'));
