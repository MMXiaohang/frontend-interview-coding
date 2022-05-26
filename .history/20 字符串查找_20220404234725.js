
function isContain(a, b){
    for(let i in b){
        if(a[0] === b[i]){
            let tmp = true;
            for(let j in a){
                if(a[j] !== b[~~i + ~~j])
                    tmp = false;
            }
            if(tmp) return i;
        }
    }
    return -1;
}

a='355';
b='12354355'; // 返回 5
console.log(isContain(a,b));