const map = new Map();
let arr = [2, 4, 5, 1, 6, 7, 3, 2]
for(let i = 0 ; i < arr.length; i++){
    if(!map.has(arr[i])){
        map.set(arr[i], []);
    }
    map.set(arr[i], map.get(arr[i]).push(i))
}
console.log(map)
