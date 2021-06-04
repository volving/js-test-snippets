const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const axios = require('axios');
const qs = require('qs');

const { trimslash } = require('./utils.js');

let { tokens } = require('./confs/tokens.js');

function getSign({ accessKey, secretKey, requrl, method, ttl }) {
    let md5 = crypto.createHash('md5');
    let k = parseInt(Date.now() / 1000 / ttl);
    // k = 438162;
    requrl =
        'https://fft.cloud.iqiyi.com/api/file/15734598061/11582/204201/3092002/zq4fEvDyBm7s2epkNwSCHw/JLTdtuC37iOnQ93Vdfd3Ow/a003.mov';
    console.log('requrl: ', requrl);
    console.log('k: ', k);
    let rawString = `${accessKey}${requrl}${method}${secretKey}${k}`;
    console.log('rawString: ', rawString);
    md5.update(rawString);
    let ret = md5.digest('hex');
    return ret;
}

let { filePath, fft, baseUrl, uploadUrl, ttl, method } = tokens;

let apiUrl = trimslash(baseUrl) + '/' + trimslash(uploadUrl);
let requrl = trimslash(apiUrl) + '/' + trimslash(filePath);

let { accessKey, secretKey } = fft;
let sign = getSign({
    accessKey,
    secretKey,
    requrl,
    method,
    ttl
});

let queryObj = {
    access: accessKey,
    ttl,
    sign
};

let stat = fs.statSync(filePath);

if (stat) {
    let stream = fs.createReadStream(filePath, { start: 0 });
    let cnt = 0;
    stream.on('data', chunk => {
        cnt++;
        console.log(++cnt, chunk.length);
    });
    stream.on('error', error => {
        console.log('error: ', error);
    });
    stream.on('end', () => {
        console.log('ended...\n', cnt);
    });

    filePath =
        '15734598061/11582/204201/3092002/zq4fEvDyBm7s2epkNwSCHw/JLTdtuC37iOnQ93Vdfd3Ow/a003.mov';
    let uploadQuery = qs.stringify(queryObj);
    let urlPath = trimslash(filePath) + '?' + uploadQuery;
    console.log('apiUrl: ', apiUrl);
    console.log('uploadQuery: ', uploadQuery);
    console.log('urlPath: ', urlPath);
    console.log('size: ', stat.size);

    let uploader = axios({
        maxContentLength: Infinity,
        method: 'put',
        url: apiUrl + '/' + urlPath,
        headers: {
            'Content-Type': 'application/octet-stream'
        },
        data: stream
    });
    uploader.then(
        res => {
            console.log('res...:\n', res);
        },
        err => {
            console.log('err:\n', err);
        }
    );
    console.log('uploader: .....\n', uploader)
    /*
    app.put(
        urlPath,
        {},
        {
            data: stream,
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        }
    ).then(
        res => {
            console.log('res...:\n', res);
        },
        err => {
            console.log('err:\n', err);
        }
    ); */
}
