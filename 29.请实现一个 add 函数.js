add(1); 			// 1
add(1)(2);  	// 3
add(1)(2)(3); // 6
console.log(add(1)(2, 3).toString()); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6


function add(){
    let args = [].slice.call(arguments);  //闭包应用，将args保存下来

    let fn = function(){
        let fn_args = [].slice.call(arguments);
        return add.apply(null, args.concat(fn_args));  // 将add方法绑定到null并执行，将之前的参数和当前参数合并传入
    }

    fn.toString = function(){
        return args.reduce((a, b) => a + b);
    }
    return fn;
}