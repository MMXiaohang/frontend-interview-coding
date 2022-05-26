function twoSum(arr, target) {
  const map = {};
  arr.forEach((item, idx) => {
    if (map[target - item]) {
      return [idx, map[target - item]];
    }
    map[item] = idx;
  });
  return null;
}

function threeSum(nums) {
  nums.sort();
  let res = [];
  for(let i = 0; i < nums.)
}
