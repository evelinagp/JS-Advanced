function getBiggerHalf(nums) {
  nums.sort((a, b) => a - b);
  const middle = Math.floor(nums.length / 2);
  const result = nums.slice(middle);
  return result;

}