module.exports = {
    traversSet
};
const { isValidPlainObject } = require('../TypesRelated/types');
function traversSet(obj, zigzag, value) {
    let ret = obj;
    if (isValidPlainObject(obj)) {
        let parts = zigzag.split('.');
        let len = parts.length - 1;
        if (len > 0) {
            for (let i = 0; i < len; i++) {
                ret = ret[parts[i]];
                if (ret === null && i < len - 1) {
                    ret = ret[parts[i]] = {};
                }
            }
            ret[parts[len]] = value;
        } else if (len === 0) {
            obj[zigzag] = value;
        }
    }
    return ret;
}
