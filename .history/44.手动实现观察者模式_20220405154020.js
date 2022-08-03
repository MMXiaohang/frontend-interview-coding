class Subject {
    constructor(name){
        this.name = name;
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

class Observer{
    constructor(name){
        this.name = name;
    }

    update(subject){
        console.log(`我是${this.name}，观察到了${subject.name}的状态为${subject.state}`)
    }
}

let student = new Subject('学生'); 

let parent = new Observer('父母'); 
let teacher = new Observer('老师'); 

// 被观察者存储观察者的前提，需要先接纳观察者
student. attach(parent); 
student. attach(teacher); 
student. setState('被欺负了');