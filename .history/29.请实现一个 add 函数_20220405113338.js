add(1); 			// 1
add(1)(2);  	// 3
add(1)(2)(3); // 6
add(1)(2, 3); // 6
add(1, 2)(3); // 6
add(1, 2, 3); // 6


function add(){
    let args = [].slice.call(arguments);  //闭包应用，args用来保存私有属性

    let fn = function(){
        let fn_args = [].slice.call(arguments);
        return add.apply(null, args.concat(fn_args));
    }

    fn.toString = function(){
        return args.reduce((a, b) => a + b);
    }
    return fn;
}