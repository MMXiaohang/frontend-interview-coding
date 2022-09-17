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
    
    append(root, val){
        if(root !== null){
            let p = root
            while(p.next) p = p.next
            let node = new LinkedList(val, p)
            p.right = node
        }else{
            root = new LinkedList(val)
        }
        
        return root
    }
    
    remove(root, val){
        let p = root
        while(p.val !== val) p = p.next
        p.left.right = p.right
        p.right.left = p.left
    }
}
let root = new LinkedList(-1)
root.append(null, "3")
LinkedList.append(root, "4")
LinkedList.append(root, "5")
console.log(LinkedList)
LinkedList.remove(root, "4")
console.log(LinkedList)


