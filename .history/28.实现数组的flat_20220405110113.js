let ary = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(ary);

arr_flat = arr.flat(Infinity);

ary = str.replace(/\[|\]/g, '').split(',');
ary = '[' + str.replace(/\[|\]/g, '') + ']'; 
ary = JSON.parse(str);


let res = [];
let fn = function(str){
    for(let i = 0; i < str.length; i++){
        let item = str[i];
        if(Array.isArray(item)){
            fn(item);
        }else{
            res.push(item);
        }
    }
}


function flatten(str){
    return str.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
}

//第五种处理：扩展运算符
while (ary.some(Array.isArray)) {
    ary = [].concat(...ary);
  }