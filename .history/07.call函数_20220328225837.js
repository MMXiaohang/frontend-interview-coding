// 模拟 call bar.mycall(null);
// 实现一个call方法：
// 原理：利用 context.xxx = self obj.xx = func-->obj.xx()
Function.prototype.call = function(context = window, ...args){
    // 在context上加一个唯一值不影响context上的属性
    let key = Symbol('key');
    // context为绑定的对象，this为此处函数，将这个函数作为context的方法
    context[key] = this;   

    let result = context[key](...args);
    delete context[key];  // 不删除会导致context属性越来越多
    return result;
}

//用法：f.call(obj,arg1)
function f(a,b){
    console.log(a+b)
    console.log(this.name)
}
let obj={
    name:1
}
f.myCall(obj,1,2) //否则this指向window