/**
 * wrap a udp server and client in a event emitter style
 */

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var dgram = require("dgram");

// ----

function Udp() {
    this.server = dgram.createSocket("udp4");
    EventEmitter.call(this);
}

util.inherits(Udp, EventEmitter);

Udp.prototype.start = function(port) {
    var server = this.server;
    var that = this;

    server.on("message", function(buf, rx) {
        // console.log("** "+rx.address+":"+rx.port+" >> "); //  + buf.toString('hex'));
        that.emit("request", buf, rx);
    });
    server.on("error", function(err) {
        // console.log("server error:\n" + err.stack);
        server.close();
    });
    server.on("listening", function() {
        var address = server.address();
        console.log("udp server listening " + address.address + ":" + address.port);
    });

    server.bind(port);
};

Udp.prototype.response = function(buf, rx) {
    var server = this.server;
    var that = this;
    // console.log("** "+rx.address+":"+rx.port+" << "); //  + buf.toString('hex'));
    server.send(buf, 0, buf.length, rx.port, rx.address, function(err) {
        if (err) console.log("server error [response]:\n" + err.stack);
    });
};

exports.createServer = function() {
    return new Udp();
};

exports.request = function(buf, rx, callback) {
    // console.log("  ** "+rx.address+":"+rx.port+" >> " + buf); // .toString('hex'));
    var client = dgram.createSocket('udp4');
    client.send(buf, 0, buf.length, rx.port, rx.address, function(err) {
        if (err) console.log("client error [request]:\n" + err.stack);
        client.on('message', function(buf2, rx2) {
            // console.log("  ** "+rx.address+":"+rx.port+" << " + buf2); // .toString('hex'));
            client.close();
            callback(null, buf2, rx2);
        });
    });
};
