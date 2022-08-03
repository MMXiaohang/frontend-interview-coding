function myInstanceof(example, classFunc){
    let proto = Object.getPrototypeOf(example);  // 获取当前类的原型
    while(true){
        if(proto === null) return false;  // 没找到对应原型

        // 在当前实例对象的原型链上找到了当前类
        if(proto === classFunc.prototype) return true;
        // 延着原型链__proto__ 往上找
        proto = Object.getPrototypeOf(proto);
    }
}