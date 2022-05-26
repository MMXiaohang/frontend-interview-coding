// 节流函数原理:规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有最开始的那一次生效

const throttle = (func, wait = 50) => {
    let flag = true;
    return function(){
        if(!flag) return;
        flag = false;
        setTimeout(() => {
            func.apply(this, arguments);
            flag = true;
        })
    }
}