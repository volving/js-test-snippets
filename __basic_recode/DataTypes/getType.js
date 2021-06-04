module.exports = (function () {
    const fn = Object.prototype.toString;
    const startIdx = 8;
    const endIdx = -1;
    const getType = function (obj, idx = startIdx, end=endIdx) {
        /*
        let raw = fn.call(obj);
        let len = raw.length;
        end = end || len - 1;
        return raw.substring(idx, end);
        */
        return fn.call(obj).slice(idx, end);
    };

    return getType;
})();
