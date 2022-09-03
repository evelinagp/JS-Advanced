const { expect } = require('chai');
const { cinema } = require('./cinema');

//ALL TESTS WITH 0 ARE VERY IMPORTANT!
describe("Tests cinema", () => {
    describe("Tests showMovies", () => {

        it("Shoud return array of movies ", () => {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.deep.equal('King Kong, The Tomorrow War, Joker');
        });
        it("Shoud return single movie ", () => {
            expect(cinema.showMovies(['King Kong'])).to.deep.equal('King Kong');
        });
        it("Shoud return message - There are currently no movies to show", () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show');
        });
    });
    describe("Tests ticketPrice:", () => {

        it("Shoud return Premiere price", () => {
            expect(cinema.ticketPrice("Premiere")).to.equal(12.00);
        });
        it("Shoud return Premiere price", () => {
            expect(cinema.ticketPrice("Normal")).to.equal(7.50);
        });
        it("Shoud return Premiere price", () => {
            expect(cinema.ticketPrice("Discount")).to.equal(5.50);
        });
    });
    it("Shoud return Invalid projection type", () => {
        expect(() => cinema.ticketPrice("Invalid")).to.throw('Invalid projection type.');
    });
    it('does not work with empty input', () => {
        expect(() => cinema.ticketPrice()).to.throw();
    });
});
describe("Tests swapSeatsInHall:", () => {
    it("Shoud return normal expected output", () => {
        expect(cinema.swapSeatsInHall(5, 10)).to.equal("Successful change of seats in the hall.");
    });
    it(`works with correct input`, () => {
        expect(cinema.swapSeatsInHall(13, 2)).to.equal(`Successful change of seats in the hall.`);
    });
    it("Shoud return Unsuccessful change when unexisting numbers are given", () => {
        expect(cinema.swapSeatsInHall(0, 21)).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("Shoud return Unsuccessful change when unexisting indexes are given", () => {
        expect(cinema.swapSeatsInHall(21, 0)).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("Shoud test edge indexes and normal output", () => {
        expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
    });
    it("Shoud return Unsuccessful change when negative number is given", () => {
        expect(cinema.swapSeatsInHall(-5, 5)).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("Shoud return Unsuccessful change when floating point number is given", () => {
        expect(cinema.swapSeatsInHall(1.3, 5)).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("Shoud return Unsuccessful change when first number equals second", () => {
        expect(cinema.swapSeatsInHall(5, 5)).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("Shoud return Unsuccessful change when unexisting index is given", () => {
        expect(cinema.swapSeatsInHall(25, 5)).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("Shoud return Unsuccessful change when 0 index is given", () => {
        expect(cinema.swapSeatsInHall(0, 5)).to.equal("Unsuccessful change of seats in the hall.");
    });

    it("Shoud return Unsuccessful change when 0 index is given", () => {
        expect(cinema.swapSeatsInHall(5, 0)).to.equal("Unsuccessful change of seats in the hall.");
    });
    it("Shoud return Unsuccessful change when 1 parameter is given", () => {
        expect(cinema.swapSeatsInHall(1)).to.equal("Unsuccessful change of seats in the hall.");
    });
    /* it(`non intiger input`, () => {
         expect(cinema.swapSeatsInHall(4.4, 19.1)).to.equal(`Unsuccessful change of seats in the hall.`)
     });*/
    /*it(`negative input`, () => {
        expect(cinema.swapSeatsInHall(-4, -3)).to.equal(`Unsuccessful change of seats in the hall.`)
    });*/
});