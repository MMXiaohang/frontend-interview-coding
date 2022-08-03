const map = new Map();
map.set('1', []);
const arr = map.get('1')
arr.push(2).push(3);
console.log(arr)
