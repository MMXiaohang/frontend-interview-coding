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
            this.events[eventName].indexOf(fn);
        }
    }
}