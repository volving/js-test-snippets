module.exports = {
    traversGet
};
const { isValidPlainObject } = require('../TypesRelated/types');
function traversGet(obj, zigzag) {
    let ret = obj;
    if (isValidPlainObject(obj)) {
        let parts = zigzag.split('.');
        let len = parts.length;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                ret = ret[parts[i]];
                if (ret === null && i < len - 1) {
                    ret = ret[parts[i]] = {};
                }
            }
        }
    }
    return ret;
}
