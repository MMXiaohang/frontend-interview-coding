// 防抖是将多次执行变为最后一次执行，等待时间内重新触发会重新计时
// func 是用户传入需要防抖的函数
const debounce = (func, wait = 50) => {
    let timer = 0;
    return (...args) => {
        if(timer) clearTimeout(timer);   // 清除上一次的定时器
        timer = setTimeout(() => {
            func.apply(this, args);   // 重新绑定该方法
        }, wait);
    }
}

const func = () => {
    console.log('防抖函数');
}

const fn = debounce(func, 1000);
fn();