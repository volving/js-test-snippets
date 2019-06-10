
function compareVersion(version1, version2) {
    /* 功能实现 */
    function isParaValid(p) {
        /**
         * 正常x.y.z || 单个数字
         */
        if ((typeof p === 'number' && !isNaN(p) && isFinite(p)) && Math.floor(p) === p && p >= 0 || (p && typeof p === 'string' && p.length > 0)) {
            return true;
        }
        return false;
    }
    if (isParaValid(version1) && isParaValid(version1)) {
        const v1 = typeof version1 === 'number' ? [version1] : version1.split('.');
        const v2 = typeof version2 === 'number' ? [version2] : version2.split('.');
        function cmpSub(i) {
            const sub1 = parseInt(v1[i]) || 0;
            const sub2 = parseInt(v2[i]) || 0;
            const diff = sub1 - sub2;
            if (diff > 0) {
                return 1;
            } else if (diff < 0) {
                return -1
            } else {
                return 0
            }
        }
        const len = v1.length > v2.length ? v1.length : v2.length;
        let res = 0;
        for (let i = 0; i < len && res === 0; i++) {
            res = cmpSub(i);
        }
        return res;
    } else {
        throw new TypeError('Invalid parameter(s)');
    }
}

try{
    console.log(compareVersion('0.1', '1.1.1'));
    console.log(compareVersion('13.37', '1.2 '));
    console.log(compareVersion('1.1', '1.1.0'));
    console.log(compareVersion(2, '1.1.0'));
    console.log(compareVersion('', '1.1.0'));
} catch (e) {
    console.log(e)
}