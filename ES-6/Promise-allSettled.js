Promise.allSet = function(ps){
    let ret = []
    
    ps.forEach(p => {
        ret.push(new Promise(function (resolve, reject){
            return p.then(data => {
                resolve({data, fulfilled: true})
            }).catch(function (reason) {
                resolve({reason, fulfilled: false})
            })
        }))
    })
    return Promise.all(ret);
}




let urls = ['https://www.alibaba.com', 'https://www.baidu.com', 'https://cadillac.com', 'https://diploma.com'];
function fetch(url) {
    let rand = parseInt(Math.random()*1000);
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            if(rand % 2) {
                resolve(rand);
            } else {
                reject(rand)
            }
        }, rand)
    })
}


let ps = urls.map(function(u) {
    return fetch(u);
})

Promise.allSet(ps).then(data => {
    console.log(data)
})