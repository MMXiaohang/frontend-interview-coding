var s1 = "get-element-by-id"

const f = function(s){
    return s.replace(/-\w/g, (x) => {  // x是匹配到的结果
        return x.slice(1).toUpperCase();
    })
}

console.log(f(s1));

const arr = [1,2,3,4,5,6];
arr.splice(1, 2)
console.log(arr);