const fs = require('fs');
const crypto = require('crypto');

const { key } = require('./key.js');
console.log(key);
const iv = Buffer.alloc(16, 0);


let decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);
let input = fs.createReadStream('data/secret.dat');
let output = fs.createWriteStream('data/deciphered.json');

// 解密并输出
input.pipe(decipher).pipe(output);
