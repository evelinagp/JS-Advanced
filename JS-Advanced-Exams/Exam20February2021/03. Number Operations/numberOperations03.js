const { expect, assert } = require('chai');

const numberOperations = {
    powNumber: function(num) {
        return num * num;
    },
    numberChecker: function(input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function(array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

describe("Tests numberOperations", () => {
    describe("Tests powNumber", () => {

        it("Shoud return the number powered 2", () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
            expect(numberOperations.powNumber(-4)).to.equal(16);
            expect(numberOperations.powNumber(0)).to.equal(0);
            expect(numberOperations.powNumber(1.5)).to.equal(1.5 * 1.5);
            assert.isNaN(numberOperations.powNumber(NaN));
        });
    });
    describe("Tests numberChecker", () => {
        it("Shoud correctly coerse input argument", () => {
            expect(numberOperations.numberChecker('3')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('')).to.equal('The number is lower than 100!');
        });
        it("Shoud throw when input argument coerses to Nan", () => {
            expect(() => numberOperations.numberChecker('abc')).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker(undefined)).to.throw('The input is not a number!');
            expect(() => numberOperations.numberChecker('123b')).to.throw('The input is not a number!');
        });
        it("Should return a correct string when argument is a valid number", () => {
            expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('-100')).to.equal('The number is lower than 100!');
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
            expect(numberOperations.numberChecker('126.56')).to.equal('The number is greater or equal to 100!');
        });

    });
    describe("Tests sumArrays", () => {
        it("Should return empty array when sum with empty arrays", () => {
            assert.deepEqual(numberOperations.sumArrays([], []), []);
            assert.deepEqual(numberOperations.sumArrays([], [1, 2, 3]), [1, 2, 3]);

        });
        it("Should return correct result when both parameters are non empty equal length arrays", function() {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [2, 3, 4]), [3, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays([-1, 2, 3], [-2, 3, 4]), [-3, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays([1.1, 2, 3], [2.2, 3, 4]), [1.1 + 2.2, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], ['b', 'c', 'd']), ['ab', 'bc', 'cd']);
        });

        it("Should return correct result when both parameters are non empty arrays of different length", function() {
            assert.deepEqual(numberOperations.sumArrays([1, 2, 7], [2, 3]), [3, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays([-1, 2, 7], [-2, 3]), [-3, 5, 7]);
            assert.deepEqual(numberOperations.sumArrays([1.1, 2, 8], [2.2, 3]), [1.1 + 2.2, 5, 8]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], ['b', 'c']), ['ab', 'bc', 'c']);

        });
    });
});