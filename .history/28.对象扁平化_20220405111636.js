function objectFlat(obj = {}){
    const res = {};
    const flat = (item, preKey = '') => {
        //Object.entries返回参数中的key/value数组
        Object.entries(item).forEach(([key, val]) => {
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

// 测试
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
console.log(objectFlat(source));
