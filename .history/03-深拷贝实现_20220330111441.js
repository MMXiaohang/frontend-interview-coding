const newObj = JSON.parse(JSON.stringify(oldObj));

// WeakMap 中存储的 key 必须是对象
const deepClone = (obj, hash = new WeakMap()){
    if(obj === null) return obj;   // null或者undefined就直接返回
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    // 如果是普通类型的值或者函数，就不需要深拷贝
    if(typeof obj !== 'object') return obj;
    // 如果已经拷贝过该对象就直接返回
    if(hash.get(obj)) return hash.get(obj); 
    const cloneObj = Array.isArray(obj) ? [] : {};
    hash.set(obj, cloneObj);
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
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
    if(symKeys.length){
        symKeys.forEach(symKey => {
            if(typeof target[symKey] === 'object' && target[symKey] != null){
                cloneTarget[symKey] = deepClone1(target[symKey]);
            }else{
                cloneTarget[symKey] = target[symKey];
            }
        })
    }

    for(let prop in target){
        if(target.hasOwnProperty(prop)){
            cloneTarget[prop] = deepClone1(target[prop], map);
        }
    }
    return cloneTarget;
}