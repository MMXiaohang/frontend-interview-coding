function myNew(fn, ...args){
    let instance = Object.create(fn.prototype);  // 创建原型对象的实例
    let res = fn.apply(instance, args);  // 执行构造函数，改变this指向
    // 确保返回的是一个对象（万一fn不是构造函数）
    return typeof res === 'object' ? res : instance;
}

function myNew() {
    var obj = new Object();
    var Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj, arguments);
    return obj;
}