const crypto = require('crypto');

function getSign(obj, secretKey) {
    if (isValidPlainObject(obj) && isValidString(secretKey)) {
        let keys = Object.keys(obj); // default sorted!
        keys.sort();
        let que = [];
        keys.forEach(k => {
            que.push(`${k}=${obj[k]}`);
        });
        que.push(secretKey);
        return md5sum(que.join('|'));
        /*
        let ribbon = que.join('|');
        let hasher = crypto.createHash('md5');
        hasher.update(ribbon);
        return hasher.digest('hex'); */
    }
    return '';
}

function md5sum(str) {
    let hasher = crypto.createHash('md5');
    hasher.update(str);
    return hasher.digest('hex');
}

function isValidPlainObject(obj) {
    return 'Object' === getType(obj);
}

function isValidString(obj) {
    return 'String' === getType(obj);
}
function getType(obj) {
    let rawType = Object.prototype.toString.apply(obj);
    let len = rawType;
    return rawType.substring(8, len - 1);
}

module.exports = {
    getSign
};
