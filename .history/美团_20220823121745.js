//line=readline()
//print(line)
// console.log('Hello World!');

/**

package.json
{
 dep:
 {
    a: 1.0.0,（d: 1.0.1）
    b: 2.0.0, (d: 2.0.1)
    c: 1.0.0
 }
}

// 不完整关联关系
c package.json
{
    a: 1.6.0, (d: 1.6.0)
    b: 1.0.0,  (d:1.0.0)
}

Q1: a.tsx 中 import d from 'd', 能找到依赖吗

Q2: import d from 'd', 版本是多少


*/

// 手写题
/**
1、用js实现一个双向链表

2、实现 append 三个数据：3、4、5
LinkedList.append("3")
LinkedList.append("4")
LinkedList.append("5")
console.log(LinkedList)

3、实现 remove 4
LinkedList.remove("4")
console.log(LinkedList)
*/


class LinkedList{
    constructor(val, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
    
    append(val){
        let p = this
        while(p.next) p = p.next
        let node = new LinkedList(val, p)
        p.right = node
        
        return root
    }
    
    remove(val){
        let p = this.right
        console.log(p)
        while(p && p.val !== val) p = p.next
        if(p.right){
            p.left.right = p.right
            p.right.left = p.left
        }else{
            
        }
    }
}
let root = new LinkedList(-1)
root.append("3")
root.append("4")
root.append("5")
console.log(root)
root.remove("4")
console.log(root)


