function solve(matrix) {
    let equal = true;
 
    let initialSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        initialSum += matrix[0][i];
    }
 
    for (let row = 0; row < matrix[0].length; row++) {
        let currentRow = 0;
        let currentCol = 0;
        for (let col = 0; col < matrix.length; col++) {
            currentRow += matrix[row][col];
            currentCol += matrix[col][row];
        }
        
        if (currentRow != initialSum || currentCol != initialSum) {
            equal = false;
            break;
        }
    }
 
    return equal;
}