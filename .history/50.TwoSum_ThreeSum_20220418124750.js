function twoSum(arr, target) {
  const map = {};
  arr.forEach((item) => {
    map[item] = true;
    if (map[target - item]) {
      return [item, target - item];
    }
  });
}
