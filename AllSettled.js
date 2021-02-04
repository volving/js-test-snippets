function rand() {
    let num = parseInt(Math.random()*100);
    return new Promise(function (resolve, reject) {
        if(num%2) {
            reject(num);
        }
        resolve(num);
    })
    
}



function allSettled(plist) {
    if (isValidArray(plist)) {
        return Promise.all(
            plist.map(p =>
                Promise.resolve(p).then(
                    value => ({ status: 'resolved', value }),
                    reason => ({ status: 'rejected', reason })
                )
            )
        );
    } else {
        Promise.reject({
            message: 'param is not a valid array'
        });
    }
}