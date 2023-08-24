import { capitalize } from "./arrow-cat";

describe("test suite for `sentence`", () =>{
    test("capitalize", () => {
        expect(capitalize("HELLO")).toBe("Hello");
    });
});