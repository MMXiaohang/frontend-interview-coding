function objFlat(obj = {}){
    const res = {};
    const flat = (item, preKey = '') => {
        //Object.entries返回参数中的key/value数组
        Object.entries(item).forEach(([key, value]) => {
            const newKey = preKey ? `${preKey}.${key}` : key;
            if(val && typeof val === 'object'){
                flat(val, newKey);
            }else{
                res[newKey] = val;
            }
        })
    }

    flat(obj);
    return res;
}

