// 模拟 call bar.mycall(null);
// 实现一个call方法：
// 原理：利用 context.xxx = self obj.xx = func-->obj.xx()
Function.prototype.call = function(context = window, ...args){
    // 在context上加一个唯一值不影响context上的属性
    let key = Symbol('key');
    context[key] = this;   // context为调用的上下文，this为此处函数，将这个函数作为context的方法

    let result = context[key](...args);
    delete context[key];
    return result;
}