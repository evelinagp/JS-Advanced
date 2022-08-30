function sunRange(array, start, end) {
    //take range from array
    //sum selected elements

    if (Array.isArray(array) == false) {
        return NaN;
    }
    if (start < 0) {
        start = 0;
    }
    if (end >= array.length) {
        end = array.length - 1;
    }
    let sum = 0;

    for (let index = start; index <= end; index++) {
        sum += Number(array[index]);

    }
    return sum
}
console.log(sunRange([10, 20, 30, 40, 50, 60], 3, 300));
console.log(sunRange([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(sunRange([10, 'twenty', 30, 40], 0, 2));
console.log(sunRange([], 1, 2));
console.log(sunRange('text', 0, 2));