const newObj = JSON.parse(JSON.stringify(oldObj));

const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;

const deepClone = (target, map = new Map()) => {
    if(map.get(target)) return target;
    if(isObject(target)){
        map.set(target, true);
        const cloneTarget = Array.isArray(target) ? [] : {};
        for(let prop in target){
            if(target.hasOwnProperty(prop)){
                cloneTarget[prop] = deepClone(target[prop], map);
            }
        }
        return cloneTarget;
    }else{  
        return target;
    }
}

const deepClone1 = (target, map = new Map()) => {
    // 对于传入参数处理
    if(typeof target !== 'object' || target === null){
        return target;
    }

    // 哈希表中存在直接返回
    if(map.has(target)) return map.get(target);

    const cloneTarget = Array.isArray(target) ? [] : {};
    map.set(target, cloneTarget);

    // 针对Symbol属性
    const symKeys = Object.getOwnPropertySymbols(target);
}