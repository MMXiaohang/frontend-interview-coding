function union(arr1, arr2){
    return arr1.filter(item => {
        return arr2.indexOf(item) !== -1;
    })
}

const a = [1, 2, 2, 1];
const b = [2, 3, 2];
console.log(union(a, b)); // [2, 2]