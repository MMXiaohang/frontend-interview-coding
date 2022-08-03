function union(arr1, arr2){
    return arr1.filter(item => {
        return arr2.indexOf(item)
    })
}