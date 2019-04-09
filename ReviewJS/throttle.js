function throttle(fn, span=300){
    let pre = Date.now();
    return function() {
        if(Date.now() > pre + span) {
            fn(arguments);
            pre = Date.now();
        }
    }
}

function log() {
    console.log('log---', arguments);
}

let fn = throttle(log, 300);
fn(1)
fn(2)
fn(3)
fn(4)

setTimeout(function () {
    fn(5)
}, 400)
setTimeout(function () {
    fn(6)
}, 700)
setTimeout(function () {
    fn(7)
}, 710)
setTimeout(function () {
    fn(8)
}, 730)