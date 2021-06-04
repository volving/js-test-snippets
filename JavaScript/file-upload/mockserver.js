const http = require('http');
const fs = require('fs');
const uid = require('uid-safe');

const server = http.createServer(function(req, res) {
    // console.log(req);
    let ab = [];
    let stream;
    let filePath;
    function createWriteStream() {
        filePath = `./copy/${uid.sync(8)}.mp4`;
        stream = fs.createWriteStream(filePath, {
            flags: 'w',
            autoClose: true,
        });
        stream.setDefaultEncoding = 'utf8';
    }
    let cnt = 0;
    req.on('data', chunk => {
        if (!stream) {
            createWriteStream();
        }
        /*
        let buf = chunk.buffer;
        console.log(
            chunk.length,
            Object.prototype.toString.apply(chunk),
            Object.prototype.toString.apply(buf),
            chunk
        );
        */
        console.log(++cnt, chunk.length);
        if (chunk.length > 0) {
            stream.write(chunk);
            ab.push(chunk);
        }
    });
    req.on('end', () => {
        // console.log(ab.join('').toString());
        cnt = 0;
        let leng = ab.reduce((sum, cur) => {
            // console.log(sum);
            return sum + cur.length;
        }, 0);
        console.log(leng);
        stream.end();
        res.end('Good job');
        fs.stat(filePath, (err, stat) => {
            if (err) {
                return console.log(err);
            }
            console.log(stat);
        });
    });
    // res.end('Good job');
});

server.listen(4444, () => {
    console.log('Server starts listening port 4444.');
});
