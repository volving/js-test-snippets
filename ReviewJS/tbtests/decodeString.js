function decodeString(str) {
    /* 功能实现 */
    const timesStack = [];
    const subStack = [];
    const composeStack = [];
    let subStr = '';

    let smf = 0;
    // 遍历子串构造子串序列和重复序列
    for (let i = 0, len = str.length; i < len; i++) {
        let char = str[i];
        switch (char) {
            case '[':
                break;
            case ']':
                smf += 1;
                if(subStr.length > 0){
                    if(smf < 0) {
                        subStack.push('-' + subStr);
                    } else {
                        subStack.push(subStr);
                    }
                    subStr = '';
                }
                break;
            default:
                let num = parseInt(char)
                if (!isNaN(num)) {
                    if(subStr.length > 0) {
                        subStack.push(subStr);
                        if(timesStack.length < subStack.length) {
                            timesStack.push(1);
                        }
                    }
                    timesStack.push(num);
                    subStr = '';
                    smf -= 1;
                } else {
                    subStr += char;
                }
                console.log(timesStack, subStack)
        }
    }
    // 处理尾部
    if(subStr.length > 0){
        subStack.push(subStr);
        timesStack.push(1);
    }
    subStr = '';
    // 辅助函数, 复制n次字串str
    function cloneNtimes(n, str) {
        let res = '';
        if(n && typeof n === 'number' && !isNaN(n) && isFinite(n) && n > 0 && str && typeof str ==='string' && str.length > 0){
            for(let i = n; i > 0; i--) {
                res += str;
            }
        }
        return res || undefined;
    }
    // 拼接子串
    for(let i = timesStack.length - 1; i > -1; i--){
        let curStr = subStack[i];
        if(curStr.indexOf('-') === 0) {
            
            subStr = cloneNtimes(timesStack[i], curStr.slice(1));
        } else {
            curStr += subStr;
            subStr = '';
            composeStack.unshift(cloneNtimes(timesStack[i], curStr));
            
        }
    }
    let res = composeStack.join('');
    console.log(res)
    return res;
};

const s = '3[a]2[bc]'; decodeString(s); // 返回'aaabcbc'
const s2 = '3[a2[c]]'; decodeString(s2); // 返回'accaccacc'
const s3 = '2[abc]3[cd]ef'; decodeString(s3); // 返回'abcabccdcdcdef'
const s4 = '2[abc]3[cd]ef2[ab]'; decodeString(s4); // 返回'abcabccdcdcdefabab'
const s5 = '2[2[abc]ef]2[ab]'; decodeString(s5); // 返回'abcabcefabcabcefabab'