function town(input) {
    const towns = {};

    for (let data of input) {
        const tokens = data.split(' <-> ');
        const townName = tokens[0];
        const townPopulation = Number(tokens[1]);

        if (towns[townName] == undefined) {
            towns[townName] = townPopulation;
        } else {
            towns[townName] += townPopulation;
        }
    }
    for (const townName in towns) {
        console.log(`${townName} : ${towns[townName]}`);
    }
}