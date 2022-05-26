function union(arr1, arr2){
    return arr1.filter(item => {   // 遍历数组，执行回调函数，如果是true的话就保留
        return arr2.indexOf(item) !== -1;
    })
}

const a = [1, 2, 2, 1];
const b = [2, 3, 2];
console.log(union(a, b)); // [2, 2]