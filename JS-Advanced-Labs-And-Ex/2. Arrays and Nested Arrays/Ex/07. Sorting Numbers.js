function solve(array) {
     array = array.sort((a, b) => {
        return a-b;
    })
    const result = [];
    while (array.length > 0) {
        result.push(array.shift());
        result.push(array.pop());
    }
    return result;
}