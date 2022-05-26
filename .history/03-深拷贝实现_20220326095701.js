
const isObject = (target) => (typeof target === 'object' || typeof target === 'function') && target !== null;

const deepClone = (target) => {
    if(typeof target === 'object' && target !== null){
        const cloneTarget = Array.isArray(target) ? [] : {};
        for(let prop in target){
            if(target.hasOwnProperty(prop)){
                cloneTarget[prop] = deepClone(target[prop]);
            }
        }
        return cloneTarget;
    }else{
        return target;
    }
}