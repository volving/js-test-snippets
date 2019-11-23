const crypto = require('crypto');

module.exports.key = crypto.scryptSync('Passw0rd', 'salt-say-sugar', 24);

