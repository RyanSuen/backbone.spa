/**
 * Created by sun yi on 2015/12/25.
 */
export function isNotEmpty(s) {
    return !/^\s*$/.test(s);
}

export function isEmail(s) {
    return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(s);
}

export function isCorrectOrderCode(s) {
    return /^[A-Z0-9]{22}$/i.test(s);
}

export function isChinese(s) {
    return /^[\u4e00-\u9fa5]+$/.test(s);
}

export function isCellPhone(s) {
    return /^1[0-9]{10}$/.test(s);
}

export function isCorrectVerifyCode( s ) {
    return /^[1-9]\d{5}$/.test( s );
}