function solve(array, rotation) {
    for (let index = 0; index < rotation; index++) {
        array.unshift(array.pop());
    }
    console.log(array.join(' '));
}