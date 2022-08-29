function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let currentElement = result.slice(startIndex, startIndex + k).reduce((acc, el) => acc + el, 0);
        result.push(currentElement);
    }

   return result;
}

/* Second Solution
function lastK(n, k) {
  let seq = [];
  while (seq.length !== n) {
    if (seq.length > 0) {
      let temp = 0;
      for (let i = seq.length - k; i <= seq.length - 1; i++) {
        if (i >= 0) {
          temp += seq[i];
        }
      }
      seq.push(temp);
    } else {
      seq.push(1);
    }
  }
  return seq;
}
*/