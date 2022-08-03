Promise.resolve = (param) => {
    if(param instanceof Promise) return param;
    return new Promise((resolve, reject) => {
        if(param && param.then && typeof param.then === 'function'){
            // param 状态变为成功会调用resolve，将新 Promise 的状态变为成功，反之亦然
            param.then(resolve, reject);
        }else{
            resolve(reject);
        }
    })
}

Promise.reject = function(reason){
    return new Promise((resolve, reject) => {
        reject(reason);
    })
}


Promise.myAll = function(promiseArr) {
    return new Promise((resolve, reject) => {
      const ans = [];
      let index = 0;
      for (let i = 0; i < promiseArr.length; i++) {
        promiseArr[i]
        .then(res => {
          ans[i] = res;
          index++;
          if (index === promiseArr.length) {
            resolve(ans);
          }
        })
        .catch(err => reject(err));
      }
    })
  }
  