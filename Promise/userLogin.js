var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
    useNewUrlParser: true
}, function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");

    function fetchUserInfo(uname, upassword) {
        return new Promise(function(resolve, reject) {
            dbo.collection("user").find({
                name: uname,
                upassword: encrypt(upassword)
            }).toArray(function (err, result) { // 返回集合中所有数据
                if (err) throw err;
                resolve({
                    uname,
                    password,
                    ...result
                });
                db.close();
            });
        })
    }
    let p = fetchUserInfo('vno', 'vno1234')
    p.then(function A(v){
        let {
            priorities,
            level
        } = v;
        console.log(priorities);
        if(priorities.indexOf('soldier') && level > 3){
            v.hornored = true;
        }
        return v;
    }, function B(r){
        return new Error(r);
    }).then(function C(v) {
        logger.log(v);
    }, function D(r) {
        logger.error(r);
    })
});

