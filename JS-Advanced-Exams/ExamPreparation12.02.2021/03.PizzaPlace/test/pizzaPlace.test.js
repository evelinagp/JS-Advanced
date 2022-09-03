const { expect } = require('chai');

let pizzUni = {
    makeAnOrder: function(obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`
            }
            return result;
        }
    },

    getRemainingWork: function(statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function(totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}

describe("Tests PizzaPlace", () => {
    describe("Tests makeAnOrder", () => {

        it("Shoud return confirm message when pizza is ordered ", () => {
            let order = {
                orderedPizza: 'Margaritta'
            };
            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered ${order.orderedPizza}`);
        });

        it("Shoud return confirm message when  pizza  and drink are ordered ", () => {
            let order = {
                orderedPizza: 'Margaritta',
                orderedDrink: 'coke'
            };
            expect(pizzUni.makeAnOrder(order)).to.equal(`You just ordered ${order.orderedPizza} and ${order.orderedDrink}.`);
        });

        it("Shoud throw error when there is no pizza ", () => {
            let order = {};
            expect(() => pizzUni.makeAnOrder(order)).to.throw('You must order at least 1 Pizza to finish the order.');
        });
        it("Shoud throw error when only drink is ordered", () => {
            let order = {
                drink: 'coke'
            };
            expect(() => pizzUni.makeAnOrder(order)).to.throw('You must order at least 1 Pizza to finish the order.');
        });

    });
    describe("Tests getRemainingWork", () => {

        it("Shoud return confirm message when one order is ready ", () => {
            let statusArr = [{
                pizzaName: 'Margaritta',
                status: 'ready'
            }];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`All orders are complete!`);
        });
        it("Shoud return confirm message when two or more orders are ready ", () => {
            let statusArr = [
                { pizzaName: 'Margaritta', status: 'ready' },
                { pizzaName: 'Pllo', status: 'ready' }

            ];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`All orders are complete!`);
        });
        it("Shoud return reamining pizzas when there are still a pending order", () => {
            let statusArr = [
                { pizzaName: 'Pllo', status: 'ready' },
                { pizzaName: 'Margaritta', status: 'preparing' }
            ];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Margaritta.`);
        });
        it("Shoud return reamining pizzas when there are still pending orders", () => {
            let statusArr = [
                { pizzaName: 'Pllo', status: 'ready' },
                { pizzaName: 'Margaritta', status: 'preparing' },
                { pizzaName: 'Italiana', status: 'preparing' }
            ];
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Margaritta, Italiana.`);
        });

    });
    describe("Tests orderType", () => {

        it("Shoud return totalSum when the typeOfOrder is Delivery", () => {
            let totalSum = 10;
            let typeOfOrder = 'Delivery';
            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.equal(totalSum);
        });
        it("Shoud return totalSum when the typeOfOrder is Carry out", () => {
            let totalSum = 10;
            let typeOfOrder = 'Carry Out';
            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.equal(9);

        });
        it("Shoud return totalSum with discount when the number is floating point", () => {
            let totalSum = 10.50;
            let typeOfOrder = 'Carry Out';
            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.equal(9.45);
        });
    });
});