var dgram = require('dgram');
var EventEmitter = require('events').EventEmitter;
var path = require('path');

function UdpClient(address, port, version, apprEUI) {
	this.address = address;
	this.port = port;
	this.version = version;
	this.apprEUI = apprEUI;
	this.cpush = dgram.createSocket("udp4");
	this.cpull = dgram.createSocket("udp4");
	EventEmitter.call(this);
}

var client = new UdpClient('localhost', '6553', 1, 'apprEUI');

console.log(client);

console.log(client.constructor);