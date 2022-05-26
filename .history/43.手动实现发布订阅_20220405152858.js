class EventEmitter{
    constructor(){
        this.events = {};
    }
    // 订阅事件的方法
    on(eventName, callback){
        // 一个名字可以订阅多个事件函数
        if(!this.events[eventName]){
            this.events[eventName] = [callback];
        }else{
            this.events[eventName].push(callback);
        }
    }

    emit(eventName){
        this.events[eventName] && this.events[eventName].forEach(cb => cb());  // 遍历执行
    }

    removeListener(eventName, fn){
        if(this.events[eventName]){
            let idx = this.events[eventName].indexOf(fn);
            this.events[eventName].splice(idx, 1);
            if(!this.events[eventName].length){
                delete this.events[eventName];
            }
        }
    }
}

let em = new EventEmitter();

function workDay() {
  console.log("每天工作");
}
function makeMoney() {
  console.log("赚100万");
}
function sayLove() {
  console.log("向喜欢的人示爱");
}
em.on("money",makeMoney);
em.on("love",sayLove);
em.on("work", workDay);
em.on("work", makeMoney);

em.emit("money");
em.emit("love");  
em.emit("work"); 

em.removeListener("work", makeMoney);
em.emit("work");