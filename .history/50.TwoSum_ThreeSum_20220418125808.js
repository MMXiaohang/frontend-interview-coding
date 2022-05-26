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
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break; // 跳出
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 相同的跳过
    let j = i + 1,
      k = nums.length - 1;
    while (j < k) {
      let cur = nums[i] + nums[j] + nums[k];
      if (cur === 0) {
        res.push([i, j, k]);
        while (j < k && nums[j] === nums[j + 1]) j++; // 去重
        while (j < k && nums[k] === nums[k - 1]) k--; // 去重
        j++;
        k--;
      } else if (cur < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return res;
}
