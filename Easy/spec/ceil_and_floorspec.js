const mainFile = require("../ceil-and-floor/ceil_and_floor.js");

describe("Main Test", function() {
    it("should return yes or no", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(5.67)).toMatch("6 5");
    });

    it("should return yes or no", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(20.4)).toMatch("21 20");
    });

    it("should return yes or no", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(9.23)).toMatch("10 9");
    });

    it("should return yes or no", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(37.8)).toMatch("38 37");
    });
});