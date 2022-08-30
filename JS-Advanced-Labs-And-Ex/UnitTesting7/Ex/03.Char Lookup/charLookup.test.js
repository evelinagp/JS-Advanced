const { expect } = require('chai');
const { lookupChar } = require('./module');

describe("Test lookupChar", () => {
    it("Test invalid input string", () => {
        expect(lookupChar(1, 1)).to.be.undefined;
        expect(lookupChar({}, 1)).to.be.undefined;
        expect(lookupChar([], 1)).to.be.undefined;
        expect(lookupChar(undefined, 1)).to.be.undefined;
    });
    it("Test invalid input index", () => {
        expect(lookupChar('abv', '1')).to.be.undefined;
        expect(lookupChar('abv', [])).to.be.undefined;
        expect(lookupChar('abv', {})).to.be.undefined;
        expect(lookupChar('abv', undefined)).to.be.undefined;
        expect(lookupChar('abv', NaN)).to.be.undefined;
        expect(lookupChar('abv', 3.12)).to.be.undefined;
    });
    it("Test invalid incorrect index", () => {
        expect(lookupChar('abv', -1)).to.equal("Incorrect index");
        expect(lookupChar('abv', 3)).to.equal("Incorrect index");
        expect(lookupChar('abv', 4)).to.equal("Incorrect index");
    });
    it("Test invalid incorrect index", () => {
        expect(lookupChar('abv', 0)).to.equal("a");
        expect(lookupChar('abv', 2)).to.equal("v");
    });
});