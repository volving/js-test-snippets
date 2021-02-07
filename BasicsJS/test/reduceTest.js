const reduce = require('../reduce.js');

Array.prototype.reduceX = reduce;

/*******
 * Tesing
 */

let arr = [1, 2, 3, 4, 5];

let ret = arr.reduceX(function (pre, cur, idx, arr) {
    return pre + cur;
}, 0);

if (arr.reduce(function (pre, cur, idx, arr) {
    return pre + cur;
}, 0) === ret) {
    console.log('Done: arr.reduce()');
}

if (
    arr.reverse().reduce(function (pre, cur, idx, arr) {
        return pre + cur;
    }, 0) === ret
) {
    console.log('Done: arr.reverse().reduce()');
}