function create(proto){
    function F(){}
    F.prototype = proto;  // 指定构造函数的显示原型对象
    return new F();
}