//-------------------------------------------Server starts

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('message', function (msg, rs) {
	console.log(msg);
	console.log(rs);
}).bind(2222);

//-------------------------------------------Server ends

//-------------------------------------------Clients starts
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
var buf = new Buffer('hello, this is a message');
server.send(buf, 0, buf.length, 2222, 'localhost', function () {
	console.log('Message: '+buf.toString());
});

//-------------------------------------------Clients ends