"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xhr1 = new XMLHttpRequest;
const url1 = getSearchUrl(value);
xhr1.open("GET", url1);
xhr1.send();
xhr1.onload = function () {
    const data = JSON.parse(this.response);
    if (data.results.length === 0) {
        clearResults(value);
    }
};
