var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

var cent  = new Buffer([0xc2, 0xa2]);
console.log(decoder.write(cent));


var euro = new Buffer([0xe2, 0x82, 0xAC]);
console.log(decoder.write(euro));