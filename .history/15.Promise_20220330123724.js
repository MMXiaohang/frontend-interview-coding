// 模拟实现Promise
// Promise利用三大手段解决回调地狱：
// 1. 回调函数延迟绑定
// 2. 返回值穿透
// 3. 错误冒泡

/*
    Promise构造函数
    excutor:内部同步执行的函数(resolve,reject)=>{}
*/
function Promise(excutor){

}

/*
    为Promise指定成功/失败的回调函数
    函数的返回值是一个新的promise对象
*/
Promise.prototype.then = function(onResolved, onRejected){

}

/*
    为Promise指定失败的回调函数
    是then(null, onRejected)的语法糖
*/
Promise.prototype.catch = function(onRejected){
    return Promise.prototype.then(null, onRejected);
}

/*
    返回一个指定了成功value的promise对象
*/
Promise.resolve = function(value){

}


/*
    返回一个指定了失败reason的promise对象
*/
Promise.reject = function(reason){

}

/*
    返回一个promise，只有promises中所有promise都成功时，才最终成功，返回值是一个数组包含所有promise成功返回的value
    只要有一个失败就直接失败
*/
Promise.all = function(promises){

}

/*
    返回一个promise，一旦某个 promise 解决或者拒绝， 返回的 promise 就会解决或者拒绝
*/
Promise.race = function(promises){
    
}