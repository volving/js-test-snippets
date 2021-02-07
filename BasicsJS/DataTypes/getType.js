module.exports = (function () {
    const fn = Object.prototype.toString;
    const startIdx = 8;

    const getType = function (obj, idx = startIdx, end) {
        let raw = fn.call(obj);
        let len = raw.length;
        end = end || len - 1;
        return raw.substring(idx, end);
    };

    return getType;
})();
