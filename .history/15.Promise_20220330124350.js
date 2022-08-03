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
        // 返回一个指定了成功value的promise对象
        const resolve = value => {

        }

        // 返回一个指定了失败reason的promise对象
        const reject = reason => {
            
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
    then(onResolved, onRejected){

    }

    /*
        为Promise指定失败的回调函数
        是then(null, onRejected)的语法糖
    */
   catch(onRejected){

   }

   /*
        返回一个promise，只有promises中所有promise都成功时，才最终成功，返回值是一个数组包含所有promise成功返回的value
        只要有一个失败就直接失败
    */
   static all(promises){

   }

   /*
        返回一个promise，一旦某个 promise 解决或者拒绝， 返回的 promise 就会解决或者拒绝
    */
   static race(promises){

   }
    
}