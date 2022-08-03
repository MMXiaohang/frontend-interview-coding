// 模拟 call bar.mycall(null);
// 实现一个call方法：
// 原理：利用 context.xxx = self obj.xx = func-->obj.xx()
Function.prototype.myBind  = function(context, ...outerArgs){
    let self = this;  // 保存函数，因为返回函数中的this会变成调用者
    
    return function F(...innerArgs){   // 返回了一个函数，...innerArgs为实际调用时传入的参数
        // 考虑new的方式
        if(self instanceof F){
            return new self(...outerArgs, ...innerArgs);
        }

        return self.apply(context, [...outerArgs, ...innerArgs]);   // 返回改变了this的函数，参数合并
    }
    
}

document.body.addEventListener('click', func.bind(obj, 10, 20))

function func(params) {}