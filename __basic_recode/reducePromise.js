/**
 *
 * @param  {Array of promise functions} taskList: promise functions
 */
function reducePromise(taskList, args) {
    console.log('taskList: ', taskList.length);

    let pre = taskList.shift();
    taskList.reduce(
        function (pre, cur) {
            return pre.then((ret) => {
                return cur(ret);
            });
        },
        Promise.resolve(pre.call(null, args)).catch((e) => {
            console.log(e);
        })
    );
}

/*

let fnOne = fnTwo = fnThree = fnFour = function (val) {
    // console.log('this: ', this);
    console.log('>>>', val, new Date());
    return new Promise(function (resolve, reject) {
        // console.log(`fnOne: , ${val}, ${typeof val}`);
        let tmp = Math.random() * 1000;
        setTimeout(function () {
            console.log('---', new Date());
            typeof val !== 'number' ? resolve(parseInt(tmp)) : resolve(val + 1);
        }, tmp)
    })
}

debugger;

let taskList = [fnOne, fnTwo, fnThree, fnFour];

reducePromise(taskList, {});

*/

module.exports = reducePromise;
