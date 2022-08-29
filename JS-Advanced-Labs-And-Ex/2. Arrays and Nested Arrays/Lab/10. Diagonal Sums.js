function solve(matrix) {
    let sum1 = 0;
    let sum2 = 0;
    for (let index = 0; index < matrix.length; index++) {
        sum1 += matrix[index][index];
        sum2 += matrix[index][matrix.length - index - 1];
    }
    console.log(`${sum1} ${sum2}`);
}