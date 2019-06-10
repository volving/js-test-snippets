/* lib to use */
function compose(mws) {
    return function (ctx, next) {
        return dispatch(0);
        function dispatch(i) {
            const fn = mws[i] || next;
            if (fn && typeof fn === 'function') {
                return Promise.resolve(fn(ctx, function () {
                    return dispatch(i + 1);
                }))
            } else {
                return Promise.resolve();
            }
        }
    }
}


/* code to run */
const mws = [];
mws.push(async function (ctx, next) {
        console.log('first--');
        await next();
        console.log('--first');
    },
    function (ctx, next) {
        console.log('2nd');
    },
    function (ctx, next) {
        console.log('3rd'); // never got run! for 2nd mw not call next();
    }
);


fn = compose(mws);
const ctx = {
    res: {
        body: ''
    },
    req: {
        url: 'localhost'
    }
};
fn(ctx).then(function () {
    console.log('done!');
});