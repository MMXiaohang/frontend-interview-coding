// 模拟 call bar.mycall(null);
// 实现一个call方法：
// 原理：利用 context.xxx = self obj.xx = func-->obj.xx()
Function.prototype.call = function(context = window, ...args){
    let key = Symbol('key');
}