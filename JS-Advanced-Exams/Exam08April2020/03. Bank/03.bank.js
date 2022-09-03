class Bank {
    _bankName
    constructor(n) {
        this._bankName = n
        this.allCustomers = []
    }

    customerExists = (id) => this.allCustomers.some(
        x => x.personalId === id
    )

    getCustomer = (id) => this.allCustomers.find(x => x.personalId === id)

    newCustomer(c) {
        if (this.customerExists(c.personalId)) {
            throw new Error(`${c.firstName} ${c.lastName} is already our customer!`)
        }

        this.allCustomers.push(c)

        return c
    }

    depositMoney(id, a) {
        if (!this.customerExists(id)) {
            throw new Error(`We have no customer with this ID!`)
        }
        const customer = this.getCustomer(id)

        customer.totalMoney = (customer.totalMoney || 0) + Number(a)
        customer.transactions = customer.transactions || []

        customer.transactions.push(
            `${customer.firstName} ${customer.lastName} made deposit of ${a}$!`
        )

        return `${customer.totalMoney}$`
    }

    withdrawMoney(id, a) {
        if (!this.customerExists(id)) {
            throw new Error(`We have no customer with this ID!`)
        }
        const customer = this.getCustomer(id)

        customer.totalMoney = customer.totalMoney || 0

        if (customer.totalMoney - a < 0) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }

        customer.totalMoney -= a
        customer.transactions = customer.transactions || []

        customer.transactions.push(
            `${customer.firstName} ${customer.lastName} withdrew ${a}$!`
        )

        return `${customer.totalMoney}$`
    }

    customerInfo(id) {
            if (!this.customerExists(id)) {
                throw new Error(`We have no customer with this ID!`)
            }
            const customer = this.getCustomer(id)

            return `Bank name: ${this._bankName}
Customer name: ${customer.firstName} ${customer.lastName}
Customer ID: ${customer.personalId}
Total Money: ${customer.totalMoney}$
Transactions:
${customer.transactions
			.reverse()
			.map((x, i, arr) => `${arr.length - i}. ${x}`)
			.join('\n')}`
	}
}
let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));