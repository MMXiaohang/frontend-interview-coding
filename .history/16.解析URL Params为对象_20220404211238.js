let url = 'https://juejin.cn/post/7073869980411887652?utm_source=gold_browser_extension#heading-13';

function parseParam(url){
    // 将 ? 后面的字符串取出来
    const paramsStr = /.+\?(.+)$/.exec(url)[1];   // .表示任意字符, +表示1个以上，exec表示进行正则匹配
    const paramsArr = paramsStr.split('&');  // 以&分割
    let paramsObj = {};
    paramsArr.forEach(param => {
        if(/=/.test(param)){ // 处理有value的参数
            let [key, val] = param.split('=');  // 分割
            val = decodeURIComponent(val);  // 解码
            val = /^\d+$/
        }
    })
}