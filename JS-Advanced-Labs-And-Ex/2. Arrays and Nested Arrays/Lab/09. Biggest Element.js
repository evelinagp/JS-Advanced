function solve(arr) {
    let matrix = arr.map(row => row.slice(' ').map(Number));
    let largest = Number.NEGATIVE_INFINITY;;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (largest < matrix[i][j])
                largest = matrix[i][j];
        }
    }
    console.log(largest);
}