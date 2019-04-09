function debounce(fn, span=300) {
    let timer;
    return function() {
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, span);
    }
}

function log() {
    console.log('log---', arguments);
}

let fn = debounce(log, 300);

fn(1)
fn(2)
fn(3)
fn(4)

setTimeout(function () {
    fn(5)
}, 400)
setTimeout(function () {
    fn(6)
}, 710)
setTimeout(function () {
    fn(7)
}, 1020)