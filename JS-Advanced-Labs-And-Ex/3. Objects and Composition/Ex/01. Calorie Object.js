function ex01(array) {
    const result = {};
    for (let index = 0; index < array.length; index += 2) {
        result[array[index]] = Number(array[index + 1]);
    }
    console.log(result);
}