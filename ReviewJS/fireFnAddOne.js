b = (function () {
    let i = -1;
    function * add() {
        while(true){
            yield ++i;
        }
    }
    let a = add();
    return function () {
        console.log(a.next().value)
    }
})()
