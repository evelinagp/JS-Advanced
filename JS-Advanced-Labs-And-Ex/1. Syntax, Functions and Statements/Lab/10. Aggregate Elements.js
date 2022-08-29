function solve(array) {
    let result1 = 0;
    let result2 = 0;
    let result3 = '';
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result1 += element;
        result2 += 1 / element;
        result3 += ''.concat(element);
    }
    console.log(result1);
    console.log(result2);
    console.log(result3);
}