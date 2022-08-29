function solve(array, step) {
   const result = [];
    for (let index = 0; index < array.length; index+=step) {
       result.push(array[index]);
    }
   return result; 
    }