function solve(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const ticketsObjects = [];
    tickets.forEach((entry) => {
        const [dest, price, status] = entry.split("|");
        ticketsObjects.push(new Ticket(dest, Number(price), status));
    });
    if (criteria == "destination") {
        ticketsObjects.sort((a, b) => {
            return a.destination.localeCompare(b.destination);
        });
    } else if (criteria == "status") {
        ticketsObjects.sort((a, b) => {
            return a.status.localeCompare(b.status);
        });
    } else {
        ticketsObjects.sort((a, b) => {
            return a.price - b.price;
        });
    }

    return ticketsObjects;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination'));