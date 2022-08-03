const map = new Map();
let arr = [2, 4, 5, 1, 6, 7, 3, 2]
for(let i = 0 ; i < arr.length; i++){
    if(!map.has(arr[i])){
        map.set(arr[i], []);
    }
    const tmp = map.get(arr[i])
    tmp.push(i)
    map.set(arr[i], tmp)
}
console.log(map)
