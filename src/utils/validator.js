/**手机号码校验 */
const phoneRegExp = /^[1][3-9]\d{9}$/;

export const phoneValidation = (phone) => {
    let phoneStr = phone.trim();
    if (!phoneStr) {
        return "手机号不能为空"
    }
    if (!phoneRegExp.test(phoneStr)) {
        return  "手机号不合法"
    }
    return null
}

export default {
    phoneValidation
}