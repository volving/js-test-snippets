/*
 * Promise.allSettled
 *
*/
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
/*
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
*/

/*
 * bind, apply, call
 *
*/

Function.prototype.vbind = function (ctx){ 
    let bond = Symbol('vbind' + Math.random());
    ctx[ bond ] = this;
    return function () {
        return ctx[ bond ](...arguments);
    }
}

/*
nf = fn.vbind({name: 'v'});
nf('arg')
*/

Function.prototype.vcall = function() {
    let args = [...arguments];
    let key = Symbol('vcall' + Math.random());
    
    let ctx = args[0] || {};
    ctx[key] = this;
    return ctx[key](...args.slice(1, args.length));
}

Function.prototype.vapply = function (ctx={}, args){
    let key = Symbol('vapply'+Math.random());
    
    ctx[key] = this;
    return ctx[key](args);
}
/*
function fn(name) {
    console.log(this.name, name)
}

fn.vcall({name: 'v'}, 'arg');

fn.vapply({name: 'v'}, ['arg', 'Elf']);
*/