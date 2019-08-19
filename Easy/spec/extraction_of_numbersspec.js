const mainFile = require("../extraction-of-numbers/extraction_of_numbers.js");

describe("Main Test", function() {
    it("should return the numbers from a string", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(3, "1 L0v3 Dcoder")).toMatch("1 0 3");
    });

    it("should return the numbers from a string", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(1, "l0l01o10")).toMatch("0 0 1 1 0");
    });

    it("should return the numbers from a string", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(4, "this is 4 test")).toMatch("4");
    });

    it("should return the numbers from a string", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(3, "d83nff 7fn34 ao38v")).toMatch("8 3 7 3 4 3 8");
    });
});