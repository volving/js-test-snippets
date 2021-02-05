const { getType } = require('./utils');

function composePromise(fnList, ...args) {
    fnList.reverse();
    return function () {
        return fnList.reduce(
            function (pre, fn) {
                if (getType(fn) === 'function') {
                    return pre.then((ret) => {
                        return fn(ret);
                    }).catch(e => {
                        return 'error:' + e;
                    });
                } else {
                    return pre;
                }
            },
            Promise.resolve(args).catch((e) => console.log(e))
        );
    };
}


function makeFn (name) {
    return function (args) {
        let tmp = parseInt(Math.random() * 1000);
        console.log(tmp, args);
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (1 === tmp % 2) {
                    resolve(`${name}:${args}`);
                } else {
                    reject(`-${name}:${args}`);
                }
            }, parseInt(tmp));
        });
    }
}


let a = makeFn('a');
let b = makeFn('b');
let c = makeFn('c');
let d = makeFn('d');


let fuse = composePromise([a, b, c, d], 'doge');

fuse().then(ret => {
    console.log('Finally a: ', ret);
});
