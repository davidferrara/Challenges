const mainFile = require("../array-sum/array_sum.js");

describe("Get Max Test", function() {
    it("should return the largest integer in the array", function() {
        expect(mainFile.getMax).toBeDefined();
        expect(mainFile.getMax([1, 2, 3, 4, 5])).toEqual(5);
    });
});

describe("Calc Test", function() {
    it("should return the remainder", function() {
        expect(mainFile.calc).toBeDefined();
        expect(mainFile.calc([1, 2, 3, 4, 5], 5)).toEqual(0);
    });
});

describe("Main Test", function() {
    it("should return the remainder", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(5, "1 2 3 4 5")).toEqual(0);
    });
});