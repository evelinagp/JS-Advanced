function ex07(array) {
    const result = [];
    const splitted = array[0].split("|");
    const town = splitted[1].trim();
    const latitude = splitted[2].trim();
    const longitude = splitted[3].trim();
    for (let index = 1; index < array.length; index++) {
        const object = {};
        const splittedEntry = array[index].split("|");
        object[town] = splittedEntry[1].trim();
        object[latitude] = Number(Number(splittedEntry[2].trim()).toFixed(2));
        object[longitude] = Number(Number(splittedEntry[3].trim()).toFixed(2));
        result.push(object);
    }
    console.log(JSON.stringify(result));
}