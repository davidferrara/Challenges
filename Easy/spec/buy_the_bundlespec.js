const mainFile = require("../buy-the-bundle/buy_the_bundle.js");

describe("Main Test", function() {
    it("should return yes or no", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(5, 14)).toMatch("No");
    });

    it("should return yes or no", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(3, 21)).toMatch("Yes");
    });

    it("should return yes or no", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(8, 56)).toMatch("Yes");
    });

    it("should return yes or no", function() {
        expect(mainFile.main).toBeDefined();
        expect(mainFile.main(2, 27)).toMatch("No");
    });
});