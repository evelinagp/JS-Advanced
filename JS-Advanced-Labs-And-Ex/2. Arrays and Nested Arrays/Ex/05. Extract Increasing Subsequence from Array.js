function solve(array) {
    //const result = [];
    let biggest = Number.MIN_SAFE_INTEGER;
    const result = array.filter((el) => {
        if (el >= biggest) {
            biggest = el;
            return true;
        }
        return false;
    })
    /* array.forEach(element => {
         if (element > biggest) {
             result.push(element);
             biggest = element;
         }
     });*/
    return result;
}