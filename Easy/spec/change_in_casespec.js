const mainFile = require("../change-in-case/change_in_case.js");

describe("Main Test", function() {
    it("should return print a string out", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(6, "Dcoder", 0, 3)).toMatch("dcoDer");
    });

    it("should return print a string out", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(12, "Hello World!", 3, 6)).toMatch("HelLo world!");
    });
});

describe("IsUpper Test", function() {
    it("should return true or false if a letter is uppercase", function() {
        expect(mainFile.isUpper).toBeDefined();
        expect(mainFile.isUpper("a")).toBeFalsy();
    });

    it("should return true or false if a letter is uppercase", function() {
        expect(mainFile.isUpper).toBeDefined();
        expect(mainFile.isUpper("T")).toBeTruthy();
    });
});