function solve(numbers) {
    const oddNumbers = numbers.filter((v, i) => i % 2 != 0);
    const doubled = oddNumbers.map(n => n * 2);
     doubled.reverse();
    console.log(doubled.join(' '));
}