function jsonp(url, jsonpCallback, success){
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.type = 'text/javascript';
    window[jsonpCallback] = function(data){
        success && success(data);
    }
    document.body.appendChild(script);
}