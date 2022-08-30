function solve(input) {

    const carBrands = new Map();
    input.forEach(element => {
        let [brand, model, count] = element.split(' | ');
        count = Number(count);

        if (carBrands.has(brand)) {
            let modelAndCountObj = carBrands.get(brand);
            if (modelAndCountObj.has(model)) {
                let totalCount = modelAndCountObj.get(model);
                totalCount += count;
                modelAndCountObj.set(model, totalCount);
            } else {
                modelAndCountObj.set(model, count);
            }
        } else {
            const modelMap = new Map();
            modelMap.set(model, count);
            carBrands.set(brand, modelMap);
        }
    });
    for (const key of carBrands.keys()) {
        console.log(key);
        const brand = carBrands.get(key);
        for (const [model, count] of brand) {
            console.log(`###${model} -> ${count}`);
        }
    }
}
console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]));