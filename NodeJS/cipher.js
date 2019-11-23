const fs = require('fs');
const crypto = require('crypto');

let { key } = require('./key.js');

// const key = crypto.scryptSync('Passw0rd', 'salt-say-sugar', 24);
const iv = Buffer.alloc(16, 0);

let cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
// let decipher = crypto.createDecipheriv('aes-192-ccm', key, iv);

let input = fs.createReadStream('.prettierrc');
let output = fs.createWriteStream('data/secret.dat');

// 加密并输出
input.pipe(cipher).pipe(output);
