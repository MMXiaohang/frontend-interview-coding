function Parent(name){
    this.parent = name;
}

Parent.prototype.say = function(){
    console.log(this.parent);
}

function Child(name, parent){
    // 子类借用父类构造函数
    Parent.call(this, parent);
    this.child = name;   // 子类增强
}

/**
 将子类链接到原型链上 
 1. 这一步不用 Child.prototype = Parent.prototype 的原因是怕共享内存，修改父类原型对象就会影响子类
 2. 不用Child.prototype = new Parent()的原因是会调用2次父类的构造方法（另一次是call），会存在一份多余的父类实例属性
 3. Object.create是创建了父类原型的副本，与父类原型完全隔离
*/
Child.prototype = Object.create(Parent.prototype);  
// 将子类原型上的构造函数指向子类构造函数
Child.prototype.constructor = Child;

Child.prototype.say = function(){
    console.log(this.parent + ' ' + this.child);
}

var parent = new Parent('father');
parent.say() // father

var child = new Child('cxk', 'father');
child.say() // father cxk