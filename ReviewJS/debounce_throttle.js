function debounce(fn, wait = 300) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(...arguments);
        }, wait);
    }
}

function throttle(fn, wait = 300) {
    let prev = Date.now();
    let cur = null;
    return function () {
        cur = Date.now();
        if (prev + wait <= cur) {
            prev = cur;
            fn.apply(...arguments);
        }
    }
}