// JSON.stringify(value[, replacer [, space]])：
// Boolean | Number| String类型会自动转换成对应的原始值。
// undefined、任意函数以及symbol，会被忽略（出现在非数组对象的属性值中时），或者被转换成 null（出现在数组中时）。
// 不可枚举的属性会被忽略如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略
// 如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略

function jsonStringify(obj){

}


let res = 123['toString']['length'] + '123456'.substring(1, 4) + '123456'.