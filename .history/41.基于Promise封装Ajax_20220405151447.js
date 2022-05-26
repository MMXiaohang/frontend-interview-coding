function ajax(url, method){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(url, method, true);
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(xhr.responseText);
                }else{
                    reject(new Error('404'));
                }
            }else{
                reject('请求数据失败');
            }
        }
        xhr.send(null);
    })
}