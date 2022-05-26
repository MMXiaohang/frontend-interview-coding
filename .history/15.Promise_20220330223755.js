// 模拟实现Promise
// Promise利用三大手段解决回调地狱：
// 1. 回调函数延迟绑定
// 2. 返回值穿透
// 3. 错误冒泡

// 定义三种状态
const PENDING = 'PENDING';      // 进行中
const FULFILLED = 'FULFILLED';  // 已成功
const REJECTED = 'REJECTED';    // 已失败

/*
    Promise构造函数
    excutor:内部同步执行的函数(resolve,reject)=>{}
*/
class Promise{
    constructor(excutor){
        // 初始化状态
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        // 成功态回调函数队列
        this.onFulfilledCallbacks = [];
        // 失败态回调函数队列
        this.onRejectedCallbacks = [];

        // 返回一个指定了成功value的promise对象
        const resolve = value => {
            // 只有PENDING状态才能更改状态
            if(this.status === PENDING){
                this.status = FULFILLED;
                this.value = value;
                 // 成功态函数依次执行
                this.onFulfilledCallbacks.forEach(fn => fn(this.value));
            }
        }

        // 返回一个指定了失败reason的promise对象
        const reject = reason => {
            if(this.status === PENDING){
                this.status = REJECTED;
                this.reason = reason;
                // 失败态函数依次执行
                this.onRejectedCallbacks.forEach(fn => fn(this.reason));
            }
        }

        try{
            excutor(resolve, reject);
        }catch(e){
            reject(e);
        }
    }

    /*
        为Promise指定成功/失败的回调函数
        函数的返回值是一个新的promise对象
    */
    then(onFulfilled, onRejected){
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;  //转为函数
        onRejected = typeof onRejected === 'function' ? onRejected : 
            reason => { throw new Error(reason instanceof Error ? reason.message : reason) };  // 抛出一个错误
        // 保存this
        const self = this;
        return new Promise((resolve, reject) => {
            if(self.status === PENDING){
                self.onFulfilledCallbacks.push(() => {
                    try{
                        // 模拟微任务
                        setTimeout(() => {
                            const result = onFulfilled(self.value); 
                            // 分两种情况：
                            // 1. 回调函数返回值是Promise，执行then操作
                            // 2. 如果不是Promise，调用新Promise的resolve函数
                            result instanceof Promise ? result.then(resolve, reject) : resolve(result);
                        })
                    }catch(e){
                        reject(e);
                    }
                });

                self.onRejectedCallbacks.push(() => {
                    try{
                        setTimeout(() => {
                            const result = onRejected(self.reason);
                            result instanceof Promise ? result.then(resolve, reject) : reject(result);
                        })
                    }catch(e){
                        reject(e);
                    }
                });
            }else if(self.status === FULFILLED){  // 当前Promise已经成功了
                try{
                    setTimeout(() => {
                        const result = onFulfilled(self.value);
                        result instanceof Promise ? result.then(resolve, reject) : resolve(result);
                    })
                }catch{
                    reject(e);
                }
            }else if(self.status === REJECTED){  // 当前Promise已经失败了
                try{
                    setTimeout(() => {
                        const result = onRejected(self.reason);
                        result instanceof Promise ? result.then(resolve, reject) : reject(result);
                    })
                }catch{
                    reject(e);
                }
            }
        })
    }

    /*
        为Promise指定失败的回调函数
        是then(null, onRejected)的语法糖
    */
   catch(onRejected){
       return this.then(null, onRejected);
   }

   /*
    返回一个 resolve 状态的Promise对象
   */
   static resolve(value) {
       if(value instanceof Promise){
           return value;
       }else{
           return new Promise((resolve, reject) => resolve(value));
       }
   }

   /*
    返回一个 reject 状态的Promise对象
   */
   static reject(reason) {
       return new Promise((resolve, reject) => reject(reason));
    }
   /*
        返回一个promise，只有promises中所有promise都成功时，才最终成功，返回值是一个数组包含所有promise成功返回的value
        只要有一个失败就直接失败
    */
   static all(promises){
       return new Promise((resolve, reject) => {
           let count = 0;
           const n = promises.length;
           const res = new Array(n);
           for(let i = 0; i < n; i++){
               Promise.resolve(promises[i]).then(
                   value => {
                       res[i] = value;
                       count++;
                       if(count === n){
                           // 将所有成功值作为返回promise 对象的成功结果值
                           resolve(res);
                       }
                   },
                   reason => reject(reason)  // 失败了直接将失败结果作为返回promise对象的失败结果值
               )
           }
       })
   }

   /*
        返回一个promise，一旦某个 promise 解决或者拒绝， 返回的 promise 就会解决或者拒绝
    */
   static race(promises){

   }
    
}