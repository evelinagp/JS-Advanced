function getSmallestTwoNums (nums){
  console.log(nums.sort((a, b) => a-b).slice(0, 2).join(' '));
}