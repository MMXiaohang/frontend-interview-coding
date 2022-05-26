function isPhone(tel){
    const reg = /^1[34578]\d{9}$/;
    return reg.test(tel);
}


function isEmail(email){
    const reg = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/
    return reg.test(email);
}

function isCardNo(number) {
    var regx = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    return regx.test(number);
}