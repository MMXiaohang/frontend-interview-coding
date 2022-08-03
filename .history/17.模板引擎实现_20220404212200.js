function render(template, data){
    const reg = /\{\{(\w+)\}\}/;   // 模板字符串正则
    if(reg.test(template)){  //判断模板里是否有模板字符串
        const name = reg.exec(template)[1];   // 查找当前模板里第一个模板字符串的字段
        template = template.replace(reg, data[name]);  // 渲染第一个模板字符串
        return render(template, data);  // 递归
    }
    return template;   // 如果没有就直接返回
}
