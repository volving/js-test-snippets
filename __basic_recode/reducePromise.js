/**
 *
 * @param  {Array of promise functions} taskList: promise functions
 */
function runPromiseQue (taskList, args) {
    console.log('taskList: ', taskList.length);

    let pre = taskList.shift();
    taskList.reduce(function (pre, cur) {
        return pre.then(ret => {
            return cur(ret);
        });
    }, Promise.resolve(pre.call(args, 99)).catch(e => {
        console.log(e);
    }))
}


let fnOne = fnTwo = fnThree = function (val) {
    // console.log('this: ', this);
    console.log('>>>', new Date());
    return new Promise(function (resolve, reject) {
        // console.log(`fnOne: , ${val}, ${typeof val}`);

        let tmp = Math.random() * 10000;
        setTimeout(function () {
            console.log('---', new Date());
            typeof val === 'number' ? resolve(parseInt(tmp)) : resolve(NaN);
        }, tmp)
    })
}

debugger;

let taskList = [fnOne, fnTwo, fnThree];

// console.log('taskList: ', Object.prototype.toString.call(taskList));

runPromiseQue(taskList, NaN);