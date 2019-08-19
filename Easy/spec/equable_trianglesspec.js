const mainFile = require("../equable-triangles/equable_triangles.js");

describe("Main Test", function() {
    it("should return true if the perimeter is equal to the area", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(6, 8, 10)).toEqual(true);
    });

    it("should return true if the perimeter is equal to the area", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(4, 8, 10)).toEqual(false);
    });

    it("should return true if the perimeter is equal to the area", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(7, 9, 11)).toEqual(false);
    });

    it("should return true if the perimeter is equal to the area", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(10, 5, 14)).toEqual(false);
    });
});