const { expect } = require('chai');
const { mathEnforcer } = require('./module');

describe("mathEnforcer", function() {
    describe('addFive', function() {
        it("should return undefined for non-number parameter", function() {
            expect(mathEnforcer.addFive("5")).to.be.equal(undefined);
        });
        it("should return correct result for positive integer parameter", function() {
            expect(mathEnforcer.addFive(10)).to.be.equal(15);
        });
        it("should return correct result for negative integer parameter", function() {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it("should return correct result for floating point parameter", function() {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    });

    describe('subtractTen', function() {
        it("should return undefined for non-number parameter", function() {
            expect(mathEnforcer.subtractTen("5")).to.be.equal(undefined);
        });
        it("should return correct result for positive integer parameter", function() {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        it("should return correct result for negative integer parameter", function() {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it("should return correct result for floating point parameter", function() {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
        });
    });

    describe('sum', function() {
        it("should return undefined for non-number first parameter", function() {
            expect(mathEnforcer.sum("5", 5)).to.be.equal(undefined);
        });
        it("should return undefined for non-number second parameter", function() {
            expect(mathEnforcer.sum(5, "5")).to.be.equal(undefined);
        });
        it("should return correct result for integer parameters", function() {
            expect(mathEnforcer.sum(5, -3)).to.be.equal(2);
        });
        it("should return correct result for floating point parameters", function() {
            expect(mathEnforcer.sum(2.7, 3.4)).to.be.closeTo(6.1, 0.01);
        })
    })
});
/*describe("Test mathEnforcer addFive functionallity", () => {
    it("Expect undefined or wrong input type", () => {
        expect(mathEnforcer.addFive("5")).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined;
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });

    it("Expect proper number outcome", () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);
    });
});

describe("Test mathEnforcer subtractTen functionallity", () => {
    it("Expect undefined or wrong input type", () => {
        expect(mathEnforcer.subtractTen("5")).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });

    it("Expect proper number outcome", () => {
        expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        expect(mathEnforcer.subtractTen(5.05)).to.be.equal(-4.95);
    });
});

describe("Test mathEnforcer sum functionallity", () => {
    it("Expect undefined or wrong input type", () => {
        expect(mathEnforcer.sum("5", 10)).to.be.undefined;
        expect(mathEnforcer.sum({}, {})).to.be.undefined;
        expect(mathEnforcer.sum([], "")).to.be.undefined;
        expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined;
    });

    it("Expect proper number outcome", () => {
        expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
        expect(mathEnforcer.sum(-30, 20)).to.be.equal(-10);
        expect(mathEnforcer.sum(20, -20)).to.be.equal(0);
        expect(mathEnforcer.sum(5.05, 5)).to.be.equal(10.05);
    });
});*/