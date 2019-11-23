const fs = require('fs');
const crypto = require('crypto');

const key = crypto.scryptSync('Passw0rd', 'salt-say-sugar', 24);
const iv = Buffer.alloc(16, 0);

let cipher = crypto.createCipheriv('aes-192-cbc', key, iv);
let decipher = crypto.createDecipheriv('aes-192-cbc', key, iv);

/* cipher **********************************************************************/

let input = fs.createReadStream('.prettierrc');
let output = fs.createWriteStream('data/secret.dat', { flags: 'w+' });

// 加密并输出
input.pipe(cipher).pipe(output);

input.on('end', () => {
    let infile = fs.createReadStream('data/secret.dat', {
        flags: 'r'
    });
    let outfile = fs.createWriteStream('data/deciphered.json', {
        flags: 'w+'
    });

    infile.pipe(decipher).pipe(outfile);
});
