// batchreq
function batchreq(urls, limit = 15, timeout = 500) {
    return new Promise(function (resolve, reject) {
        let i = 0;
        const len = urls.length;
        const ret = [];
        const plist = [];
        let timer = setTimeout(() => {
            plist.forEach(p => {
                p.promise.reject({url: p.url, error: new Error('Timeout')});
            })
            reject(ret);
        }, timeout);
        for (let j = 0; j < limit && j < len; j++) {
            req(urls, ret);
        }

        function req(urls, ret) {
            if (i >= len) {
                if (ret.length === len && timer !== null) {
                    clearTimeout(timer);
                    timer = null;
                    resolve(ret);
                } else {
                    return;
                }
            }
            let url = urls[i];
            let r = {
                            url,
                            promise: null;
                        }
            fetch(url)
                .then(
                    (data) => {
                        ret.push({ url, data });
                    },
                    (error) => {
                        ret.push({ url, error });
                    }
                )
                .finally(() => {
                    req(urls, ret);
                })
            i++;
            plist.push({
                url,
                promise: 
            })
        }
    });
}



const urls = [
    'http://alibaba.com',
    'http://baidu.com',
    'http://csdn.net',
    'http://digitalocean.com',
    'http://ebay.com',
    'http://facebook.com',
    'http://google.com',
    'http://hexo.io',
];

batchreq(urls, 3, 500).then((v) => console.log('succeeded: ', v)).catch(e => {console.log('error: ', e)});

function fetch(url) {
    return new Promise((resolve, reject) => {
        let n = rand(2);
        setTimeout(() => {
            if (n % 2) {
                resolve(n);
            } else {
                reject(n);
            }
        }, n * 10);
    });
}

function rand(n) {
    const d = [1];
    if (n > 0 && n < 7) {
        for (let i = n; i > 0; i--) {
            d.push(0);
        }
    }
    const times = parseInt(d.join(''));
    return parseInt(times * Math.random());
}


