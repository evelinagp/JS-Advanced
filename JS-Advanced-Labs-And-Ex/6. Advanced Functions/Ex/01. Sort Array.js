function solve(array, command) {
    if (command == 'asc') {
        return array.sort((a, b) => a - b);
    } else {
        return array.sort((a, b) => b - a);
    }
}