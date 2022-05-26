// 双层for循环
function doubleForDistinct(arr){
    for(let i = 0, len = arr.length; i < len; i++){
        for(let j = i + 1; j < arr.len; j++){
            if(arr[i] === arr[j]){
                arr.splice(j, 1);  //splice会修改原数组
                len--;
                j--;
            }
        }
    }
    return arr;
}

// 使用Array.filter
function filterDistinct(a, b){
    let arr = a.concat(b);
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    })
}

// 使用Set去重
function setDistinct(arr){
    return Array.from(new Set(arr));
}

