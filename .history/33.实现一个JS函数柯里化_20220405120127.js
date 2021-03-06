function curry(fn, args){
    var length = fn.length;
    var args = args || [];
    return function(){
        let newArgs = args.concat(Array.prototype.slice.call(arguments));  //能将具有length属性的对象转成数组
        if(newArgs.length < length){
            return curry.call(this, fn, newArgs);
        }else{
            return fn.apply(this, newArgs);
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