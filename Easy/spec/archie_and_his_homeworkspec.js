const mainFile = require("../archie-and-his-homework/archie_and_his_homework.js");

describe("Get Factors Test", function() {
    it("should return an array of factors", function() {
        expect(mainFile.getFactors).toBeDefined();
        expect(mainFile.getFactors(20)).toEqual([1, 2, 4, 5, 10, 20]);
    });

    it("should return an array of factors", function() {
        expect(mainFile.getFactors).toBeDefined();
        expect(mainFile.getFactors(40)).toEqual([1, 2, 4, 5, 8, 10, 20, 40]);
    });
});

describe("Get GCF Test", function() {
    it("should return the gcf of two arrays", function() {
        expect(mainFile.getGCF).toBeDefined();
        expect(mainFile.getGCF([20, 10, 5, 4, 2, 1], [40, 20, 10, 8, 5, 4, 2, 1])).toEqual(20);
    });
});

describe("Main Test", function() {
    it("should return the numbers from a string", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(20, 40)).toMatch("1 2");
    });
});