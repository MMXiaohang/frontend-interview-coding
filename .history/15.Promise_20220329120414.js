Promise.resolve = (param) => {
    if(param instanceof Promise) return param;
    return new Promise((resolve, reject) => {
        if(param && param.then && typeof param.then === 'function'){
            param.then(resolve, reject);
        }
    })
}