function curry(fn, args){
    let len = fn.length;
    let args = args || [];
    return function(){
        let newArgs = args.concat(Array.prototype.slice.call(arguments));
        if(newArgs.length < length){
            return curry.call(this, fn, newArgs);
        }else{
            return fn.apply(this, newArgs);
        }
    }
}