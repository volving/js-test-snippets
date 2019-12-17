/**
 * Hash Cipher Decipher
 */

function toMd5Hex(password) {
    let hasher = getMd5Hasher();
    return hasher.update(password).digest('hex');
}

function getMd5Hasher() {
    return getHasher('md5');
}

function getHasher(type = 'md5') {
    return crypto.createHash(type);
}

module.exports = {
    toMd5Hex,
    getMd5Hasher,
    getHasher
};
