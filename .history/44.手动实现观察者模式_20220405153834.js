class Child{
    constructor(name){
        this.state = '开心的';
        this.observers = [];
    }

    // 添加观察者
    attach(o){
        this.observers.push(o);
    }

    //更新状态
    setState(newState){
        this.state = newState;
        this.observers.forEach(o => o.update(this));  // 传入被观察者实例对象
    }
}