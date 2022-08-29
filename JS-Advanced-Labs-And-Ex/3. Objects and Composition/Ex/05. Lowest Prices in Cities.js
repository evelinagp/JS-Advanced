function lowestPricesInCities(input) {
    const products = {};
    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!products.hasOwnProperty(product)) {
            products[product] = {};
        }
        products[product][town] = price;
    }
    for (const product in products) {
        const sorted = Object.entries(products[product]).sort((a, b) => a[1] - b [1]);

        console.log(`${product} -> ${sorted[0][1]} (${sorted[0][0]})`);
            
        }
    }
