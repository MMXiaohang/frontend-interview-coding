function proxy(func){
    let instance;
    let handler = {
        constructor(target, args){
            if(!instance){
                instance = Reflect.constructor(fun, args);
            }
            return instance;
        }
    }
    return new Proxy(func, handler);
}