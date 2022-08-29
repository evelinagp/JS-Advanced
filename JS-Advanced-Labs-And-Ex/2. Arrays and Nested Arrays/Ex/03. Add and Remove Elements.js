function solve(array) {
    let number = 1;
    let result = [];

    array.forEach(element => {
        if (element == 'add'){
            result.push(number)
        }else{
            (result.pop());
        }
        number++;
    });
    if (result.length == 0){
        console.log('Empty');
    }else{
          console.log(result.join('\n'));
    }
}