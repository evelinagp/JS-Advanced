const { expect } = require('chai');
const { lookupChar } = require('./module');

/*describe("Test Return undefined", () => {
    it("Test if the input is invalid ", () => {

        let curString = 5;
        let curNumber = "5";
        index = curNumber;
        string = curString;
        expect(lookupChar(index)).to.be.undefined;
        expect(lookupChar(string)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
    });

    it("Test if index is incorrect ", () => {
        expect(lookupChar(index)).to.be.greaterThanOrEqual(string.length);
        expect(lookupChar(index)).to.be.lessThan(0); //return "Incorrect index";

       
    });
    string.charAt(index)
    it("Test if return the correct char at the specified index", () => {
        let curString = "dog"
        string = curString;
        expect(lookupChar("g")).to.be.equal(string.charAt(2));
        expect(lookupChar("d")).to.be.equal(string.charAt(0));
        expect(lookupChar("o")).to.be.equal(string.charAt(1));
    });
});
*/

describe('test cases for lookupChar(str, index) function', function() {
    it('should return undefined on lookupChar(2, 2)', () => {
        expect(lookupChar(2, 2)).to.equal(undefined);
    });

    it('should return undefined on lookupChar("test", "2")', () => {
        expect(lookupChar("test", "2")).to.equal(undefined);
    });

    it('should return undefined on lookupChar("test", 1.23)', () => {
        expect(lookupChar("test", 1.23)).to.equal(undefined);
    });

    it('should return Incorrect index on lookupChar("test", 25)', () => {
        expect(lookupChar("test", 25)).to.equal('Incorrect index');
    });

    it('should return Incorrect index on lookupChar("hello", -4)', () => {
        expect(lookupChar("hello", -4)).to.equal('Incorrect index');
    });

    it('should return Incorrect index on lookupChar("hello", 5)', () => {
        expect(lookupChar("hello", 5)).to.equal('Incorrect index');
    });

    it('should return "o" on lookupChar("hello", 4)', () => {
        expect(lookupChar("hello", 0)).to.equal('o');
    });

    it('should return "l" on lookupChar("hello", 3)', () => {
        expect(lookupChar("hello", 3)).to.equal('l');
    });
});