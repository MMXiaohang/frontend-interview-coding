let str = "abcabcabcbbccccc";
let num = 0;
let char = '';

str = str.split('').sort().join('');

// 定义正则表达式
let re = /(\w)\1+/g;
str.replace(re, ($0, $1) => {  //$0表示第一个分组(\w)的匹配内容，$1表示第二个分组的匹配内容(\1+)
    if(num < $0.length){
        num = $0.length;
        char = $1;
    }
})

console.log(`字符最多的是${char}，出现了${num}次`);
