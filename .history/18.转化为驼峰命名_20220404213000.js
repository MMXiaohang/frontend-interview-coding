var s1 = "get-element-by-id"

const f = function(s){
    return s.replace(/-\w/g, (x) => {
        return s.slice(1).toUpperCase();
    })
}