// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的 __proto__
function create(proto){
    function F(){}
    F.prototype = proto;  // 指定构造函数的显示原型对象
    return new F(); // 返回新实例的原型对象为proto
}