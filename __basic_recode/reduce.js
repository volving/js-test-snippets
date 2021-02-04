function reduce(cb, initValue) {
    /**
     * {pre, cur, idx, arr}
     */
    let arr = this; // 'this' represents the Array itself!
    let pre = initValue;

    if (typeof cb === 'function') {
        let cur = null;
        for (let len = this.length, i = 0; i < len; i++) {
            cur = arr[i];
            pre = cb.call(null, pre, cur, i, arr);
        }
    } else {
        pre = this;
    }
    return pre;
}

module.exports = reduce;
