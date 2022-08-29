function findEvenIndexes(numbers) {
    let result = [];
    for (let index = 0; index < numbers.length; index++) {
        const element = numbers[index];
        if (index % 2 == 0){
            result.push(element);
        }
    }
    console.log(result.join(' '));
}