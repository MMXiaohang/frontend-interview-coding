Array.myIsArray = function(o){
    return Object.prototype.toString.call(Object(o)) === '[Object Array]';
}
