module.exports = {
    pickItems
}

const { isValidKeyArray, isValidPlainObject } = require('../TypesRelated/types');
/**
 *
 * @param {Object} obj: 原始对象
 * @param {Array of Strings} keyList: 需要从原始对象中摘出来的属性键值
 */
function pickItems(obj, keyList) {
    let ret = {};
    if (isValidPlainObject(obj) && isValidKeyArray(keyList)) {
        keyList.forEach(i => {
            ret[i] = obj[i] || undefined;
        });
    }
    return ret;
}