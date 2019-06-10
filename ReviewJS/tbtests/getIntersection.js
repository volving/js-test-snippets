function getIntersection() {
    /* 代码实现 */
    function formalize(sect) {
        if (sect && sect instanceof Array && sect.length === 2) {
            if (sect[0] > sect[1]) {
                return [sect[1], sect[0]]
            } else {
                return sect;
            }
        } else {
            return [];
            //            throw new TypeError('Invalid parameter');
        }
    }
    function getMaxFromArray(arr) {
        return Math.max(...arr); // 上题已定义
    }
    function getMinFromArray(arr) {
        return Math.min(...arr);
    }
    function itsOf2(s1, s2) {
        s1 = formalize(s1);
        s2 = formalize(s2);
        const l1 = s1[0];
        const l2 = s2[0];
        const r1 = s1[1] || l1;
        const r2 = s2[1] || l2;
        let l = getMaxFromArray([l1, l2]);
        let r = getMinFromArray([r1, r2]);
        if (l < r) {
            return [l, r];
        } else {
            return [];
        }
    }
    let args = [...arguments];
    let its = formalize(args[0]);
    let res = args.splice(1).reduce((pre, cur) => {
        return itsOf2(pre, cur);
    }, its);
    res = res.length === 2 ? res : null;
    console.log(res)
    return res;
}

getIntersection([5, 2], [4, 9], [3, 6]); // [4, 5]
getIntersection([1, 7], [8, 9]); // null
getIntersection([1, 7]); // null
