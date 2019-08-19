const mainFile = require("../binary-to-decimal/binary_to_decimal.js");

describe("Main Test", function() {
    it("should return an integer", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main("101")).toEqual(5);
    });

    it("should return an integer", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main("100110110")).toEqual(310);
    });

    it("should return an integer", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main("11011")).toEqual(27);
    });

    it("should return an integer", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main("1011001")).toEqual(89);
    });
});