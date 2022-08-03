// 模拟 call bar.mycall(null);
// 实现一个call方法：
// 原理：利用 context.xxx = self obj.xx = func-->obj.xx()
Function.prototype.myBind  = function(context, ...outerArgs){
    let self = this;  // 保存函数
    
    return function F(...innerArgs){   // 返回了一个函数，...innerArgs为实际调用时传入的参数
        if(self instanceof F){
            return new self(...outerArgs, ...innerArgs);
        }
    }
    
}

//用法：f.call(obj,arg1)
function f(a,b){
    console.log(a+b)
    console.log(this.name)
}
let obj={
    name:1
}
f.myApply(obj,[1,2]) //否则this指向window