var s1 = "get-element-by-id"

const f = function(s){
    return s.replace(/-\w/g, (x) => {  // x是匹配到的结果
        return x.slice(1).toUpperCase();
    })
}

console.log(f(s1));