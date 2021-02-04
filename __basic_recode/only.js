const { getType } = require("./utils");

function only (obj, keyList) {
    if (getType(obj) === 'object') {
        if (getType(keyList) === 'array') {
            if (keyList.length > 0) {
                return keyList.reduce(function (pre, key) {
                    // 这里考虑不存在的 键值 和 undefined 的键值
                    if (getType(obj[ key ]) !== 'undefined') {
                        /**
                         * 这里也考虑清除 null 键值
                         * if (['null', 'undefined'].includes(getType(obj[ key ]))) {
                         */
                        console.log('...', obj[key]);
                        pre[key] = obj[key];
                    }
                    return pre;
                }, {})
            } else {
                // throw new Error('Parameter <keyList> is empty');
                return Object.assign({}, obj);
            }
        } else {
            throw new Error('Parameter <keyList> is not an valid key array');
        }
    } else {
        throw new Error('Parameter <obj> is not an object');
    }
}

let a = { name: 'only', toString: function () { return this.name; } };
let keyList = ['name', 'toString', 'age'];
let b = only(a, keyList);


console.log('b: ', b);

/**
 * Test cases!
 */
// console.log(only(null, keyList)); // Error: Parameter <obj> is not an object
// console.log(only(a)); // Error: Parameter <keyList> is not an valid key array
// console.log(only(null, [])) // Error: Parameter <obj> is not an object
console.log(only(a, []))


// module.exports = only;