function isPhone(tel){
    const reg = /^1[34578]\d{9}$/;
    return reg.test(tel);
}


function isEmail(email){
    const reg = /^([a-zA-Z0-9_\-])+@([a-zA-Z0-9_\-])+(\.[a-zA-Z0-9_\-])+$/
    return reg.test(email);
}