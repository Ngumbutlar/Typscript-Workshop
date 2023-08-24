"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arrow_cat_1 = require("./arrow-cat");
describe("test suite for `sentence`", () => {
    test("capitalize", () => {
        expect((0, arrow_cat_1.capitalize)("HELLO")).toBe("Hello");
    });
});
