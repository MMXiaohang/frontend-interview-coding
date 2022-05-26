function curry(fn, args){
    var length = fn.length;
    var args = args || [];
    return function(){
        let newArgs = args.concat(Array.prototype.slice.call(arguments));  //能将具有length属性的对象转成数组
        if(newArgs.length < length){  // 如果参数不够
            return curry.call(this, fn, newArgs);  // 返回执行curry函数，通过闭包保存newArgs
        }else{
            return fn.apply(this, newArgs);  // 参数够了就执行 fn，传入参数newArgs
        }
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}

var multi = curry(multiFn);

console.log(multi(2)(3)(4));
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4)


//ES6
const curry = (fn, arr = []) => (...args) => (
    arg => arg.length === fn.length
      ? fn(...arg)
      : curry(fn, arg)
  )([...arr, ...args])
  
  let curryTest=curry((a,b,c,d)=>a+b+c+d)