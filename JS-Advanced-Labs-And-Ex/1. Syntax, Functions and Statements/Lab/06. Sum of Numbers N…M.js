function solve (n, m){
    let startNumber = Number(n);
    let endNumber = Number(m);
    let result = 0;
    for (let index = startNumber; index <= endNumber; index++) {
        result += index;
    }
   console.log(result);  
}