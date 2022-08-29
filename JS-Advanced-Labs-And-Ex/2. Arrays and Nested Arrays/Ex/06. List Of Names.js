function solve(array) {
    const result = array.sort((a, b) => a.localeCompare(b));
    let index = 1;
    array.forEach((element) => {
        console.log(`${index}.${element}`);
        index++;
    })
}