const { expect } = require('chai');
const { isOddOrEven } = require('../module');

describe("Test EvenOrOdd", () => {
    it("Test invalid input", () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });

    it("Test if odd is returned", () => {
        expect(isOddOrEven("asd")).to.be.equal("odd");
    });

    it("Test if even is returned", () => {
        expect(isOddOrEven("asdf")).to.be.equal("even");
        expect(isOddOrEven("")).to.be.equal("even");
    });
});