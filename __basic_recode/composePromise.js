const { getType } = require('./utils');

function composePromise(fnList, ...args) {
    fnList.reverse();
    return function () {
        return fnList.reduce(function (pre, fn) {
            if (getType(fn) === 'function') {
                return pre.then(ret => {
                    return fn(ret);
                });
            } else {
                return pre;
            }
        }, Promise.resolve(args));
    };
}



