module.exports = {
    compareObjList
};

const {
    isValidArray,
    isValidPlainObject,
    isValidString,
    getType
} = require('../TypesRelated/types');

const _ = require('lodash');

function compareObjList(onlineList, storeList = []) {
    let merged = [];
    if (isValidArray(onlineList)) {
        onlineList.forEach(p => {
            let sp = storeList.find(i => p.id === i.id);
            if (sp) {
                let result = compareObj(p, sp);
                if (isValidPlainObject(result)) {
                    merged.push(result);
                }
            } else {
                merged.push(_.cloneDeep(p));
            }
        });
    }
    merged.forEach(m => {
        let idx = storeList.findIndex(i => i.id === m.id);
        if (idx > -1) {
            storeList.splice(idx, 1);
        }
        storeList.push(m);
    });

    return storeList;
}

function compareObj(online, store) {
    let differ = initDiff();
    let opts = differ(online, store);
    if (isValidArray(opts && opts.length > 0)) {
        return patch(store, opts);
    } else {
        return null;
    }
}

/**
 * Deep compares and get patch
 */

function initDiff() {
    let zigzag = [];
    let ops = [];
    return function diff(remotes, locals) {
        let rtype = getType(remotes);
        let ltype = getType(locals);
        let keys = null;
        if (rtype === ltype) {
            switch (rtype) {
                case 'Object':
                    if (remotes.id === locals.id) {
                        keys = Object.keys(remotes);
                        keys.splice(keys.indexOf('id'), 1);
                        keys.forEach(k => {
                            zigzag.push(k);
                            diff(remotes[k], locals[k]);
                            zigzag.pop();
                        });
                    } else {
                        ops.push({
                            path: Object.assign([], zigzag).join('.'),
                            action: '$push',
                            value: remotes
                        });
                    }

                    break;
                case 'Array':
                    remotes.forEach(ritem => {
                        let litem =
                            locals.find(ll => ll.id === ritem.id) || null;
                        if (null === litem) {
                            ops.push({
                                path: Object.assign([], zigzag).join('.'),
                                action: '$push',
                                value: ritem
                            });
                        } else {
                            diff(ritem, litem);
                        }
                    });
                    break;
                default:
                    if (remotes !== locals) {
                        ops.push({
                            path: Object.assign([], zigzag).join('.'),
                            action: '$set',
                            value: remotes
                        });
                    }
            }
        } else {
            ops.push({
                path: Object.assign([], zigzag).join('.'),
                action: '$set',
                value: remotes
            });
        }
        return ops;
    };
}

/**
 *
 * @param {Object} obj
 * @param {Array of objects} ops: patch list~
 */
function patch(obj, ops) {
    if (isValidPlainObject(obj) && isValidArray(ops)) {
        ops.forEach(d => {
            traversPatch(obj, d.path, d.value, d.action);
        });
    }
    return obj;
}

function traversPatch(obj, zigzag, value, action, arrayKeys = ['children']) {
    let ret = obj;
    if (isValidPlainObject(obj) && isValidString(zigzag)) {
        let parts = zigzag.split('.');
        let len = parts.length - 1;
        let segPath = '';
        if (len >= 0) {
            for (let i = 0; i < len; i++) {
                segPath = parts[i];
                let pre = ret[segPath];
                if (!isValidPlainObject(pre) && !isValidArray(pre)) {
                    if (arrayKeys.indexOf(segPath) > -1) {
                        ret[segPath] = [];
                    } else {
                        ret[segPath] = {};
                    }
                }
                ret = ret[segPath];
            }
            segPath = parts[len];
            switch (action) {
                case '$push':
                    if (arrayKeys.indexOf(segPath) > -1) {
                        if (!isValidArray(ret[segPath])) {
                            ret[segPath] = [];
                        }
                        ret[segPath].push(value);
                    }
                    break;
                case '$set':
                    ret[segPath] = value;
                    break;
                case '$remove':
                    delete ret[segPath];
                    break;

                default:
                    break;
            }
        }
    }
    return obj;
}
