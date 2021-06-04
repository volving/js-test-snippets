function rdm() {
    return new Promise(function(resolve, reject) {
        let key = parseInt(Math.random() * 100) % 4;
        if (key === 0) {
            reject(key);
        }
        setTimeout(function() {
            resolve(key);
        }, key * 1000);
    });
}

let list = [];
// list.push(
//     (function() {
//         new Promise(function() {
//             setTimeout(function() {
//                 throw new Error('Unknown!!!');
//             }, 1000);
//         });
//     })()
// );
for (let i = 0; i < 5; i++) {
    list.push(rdm());
}

let p = Promise.allSettled(list)
    .then(
        function(arr) {
            console.log('resolved: ', arr);
        },
        function(arr) {
            console.log('rejected: ', arr);
        }
    )
    .catch(r => {
        console.log('r:', r);
    })
    .finally(function() {
        console.log('heya....');
        // return Promise.resolve(5);
    });

p.then(v => {
    console.log('v: ', v);
}).then(v => {
    console.log('duex');
});
