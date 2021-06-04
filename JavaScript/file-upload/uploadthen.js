const crypto = require('crypto');
const fs = require('fs');
const axios = require('axios');
const qs = require('qs');

let { tokens } = require('./confs/tokens.js');

const {
    trimslash
} = require('./utils.js');

function getSign({ accessKey, secretKey, requrl, method, ttl }) {
    let md5 = crypto.createHash('md5');
    let rawString = `${accessKey}${requrl}${method}${secretKey}${parseInt(
        Date.now() / 1000 / ttl
    )}`;

    console.log('rawString: ', rawString);
    md5.update(rawString);
    let ret = md5.digest('hex');
    console.log('md5: ', ret);

    return ret;
}

let filesize, filestate;


let { fileName, filePath, fft, ttl, baseUrl, stateUrl, rid } = tokens;

//fileName = 'B001.mov';
// filePath = 'test/ff/video/B001.mov';
filestate = fs.statSync(filePath);
filesize = filestate.size;


let requrl = trimslash(baseUrl) + '/' + trimslash(stateUrl);
let { accessKey, secretKey } = fft;

let sign = getSign({
    accessKey,
    requrl,
    method: 'GET',
    secretKey,
    ttl
});

let queryObj = {
    file: fileName,
    size: filesize,
    access: accessKey,
    rid,
    ttl
};

const app = axios.create({
    baseURL: baseUrl,
    timeout: 10000
});

app.get(stateUrl + '?' + qs.stringify({ ...queryObj, sign })).then(
    res => {
        console.log('res...:\n', res.data);
    },
    err => {
        console.log('err:\n', err);
    }
);