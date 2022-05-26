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

// 创建父类原型的副本，将其与父类原型完全隔离

Child.prototype = Object.create(Parent.prototype);  