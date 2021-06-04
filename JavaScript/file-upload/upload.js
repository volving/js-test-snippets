const http = require('http');
const path = require('path');
const crypto = require('crypto');
const url = require('url');
const fs = require('fs');

function getSign(tokens) {
    let { accessKey, baseUrl, method, secretKey, ttl } = tokens;
    let md5 = crypto.createHash('md5');
    md5.update(
        `${accessKey}${baseUrl}${method}${secretKey}${parseInt(
            Date.now() / ttl
        )}`
    );
    return md5.digest('hex');
}

const filePath = 'R34U.mp4';

const tokens = {
    accessKey: 'e2oz8zsncwq7loww',
    secretKey: '8878f27472734509a9aa8de364709dbc',
    baseUrl: 'http://localhost:4444',
    // baseUrl: 'https://fft.cloud.iqiyi.com',
    ttl: 3600,
    method: 'PUT',
};

let query = `access=${tokens.accessKey}&ttl=${tokens.ttl}&sign=${getSign(
    tokens
)}`;

let targetUrl = `${tokens.baseUrl}/${ filePath }?${query}`;
let urlObj = url.parse(targetUrl);

var options = {
    method: 'POST',
    port: urlObj.port,
    protocol: urlObj.prototol,
    hostname: urlObj.hostname,
    path: urlObj.path,
    search: urlObj.search,
    headers: {
        'Content-Type': 'application/octet-stream',
    },
};

let stat = fs.statSync(filePath);
let start = 0;
let cnt = 0;
let writable = true;

if (stat) {
    options.headers['Content-Length'] = '' + stat.size;

    var req = http.request(options, function(res) {
        var chunks = [];

        res.on('data', function(chunk) {
            chunks.push(chunk);
        });

        res.on('end', function() {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
        });
    });
    start = stat.size >> 1;
    let fileAbsPath = path.resolve(__dirname, filePath);
    console.log(fileAbsPath);
    let readS = fs.createReadStream(fileAbsPath, { start });
    // readS.setEncoding('utf8');

    readS.on('open', fd => {
        console.log('fd: ', fd);
    });
    let buf;
    readS.on('readable', fd => {
        writeBlock();
        console.log('writable: ', writable);
        console.log(readS.bytesRead, '/', stat.size);
    });
    req.on('drain', () => {
        writable = true;
        writeBlock();
    });
    readS.on('end', () => {
        console.log('req.ended!');
        req.end();
    });
    req.on('error', err => {
        console.log('Error:', err);
        writable = false;
    });
    function writeBlock() {
        if (writable && null !== (buf = readS.read())) {
            console.log(buf);
            writable = req.write(buf, err => {
                if (err) {
                    console.log('err', err);
                    writable = false;
                    console.log(writable);
                }
                console.log('writable: ', writable);
                if (writable) {
                    writeBlock();
                }
                // req.end();
            });
        }
    }




    function produceResume(clientRequest, readStream) {
        let buf = [];
        let writable = true;
        function consume() {
            writable = clientRequest.write(buf, err => {
                console.log('Error: ', err);
            });
            if (writable) {
                this.produce();
            }
        }
        function produce() {
            if (null != (buf = readStream.read())) {
                this.consume();
            }
        }
        function startup() {
            clientRequest.on('drain', consume);
            readStream.on('open', fd => {
                console.log('fd: ', fd);
            });
            let buf;
            readStream.on('readable', fd => {
                writeBlock();
                console.log('writable: ', writable);
                console.log(readStream.bytesRead, '/', stat.size);
            });
        }
    }
}
