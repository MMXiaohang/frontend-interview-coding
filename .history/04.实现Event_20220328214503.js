class EventEmeitter {
    constructor() {
      this._events = this._events || new Map(); // 储存事件/回调键值对
      this._maxListeners = this._maxListeners || 10; // 设立监听上限
    }
  }
  
  
  // 触发名为type的事件
  EventEmeitter.prototype.emit = function(type, ...args) {
    let handler;
    // 从储存事件键值对的this._events中获取对应事件回调函数
    handler = this._events.get(type);
    if (args.length > 0) {
      handler.apply(this, args);
    } else {
      handler.call(this);
    }
    return true;
  };
  
  // 监听名为type的事件
  EventEmeitter.prototype.addListener = function(type, fn) {
    // 将type事件以及对应的fn函数放入this._events中储存
    if (!this._events.get(type)) {
      this._events.set(type, fn);
    }
  };