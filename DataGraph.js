const dgram = require('dgram');
const server = dgram.createSocket('udp4');


server.bind({
	address: 'localhost',
	port: 7777
});

server.on('message', (msg) => {
	console.log(msg);
}).on('listening', () => {
	console.log(server.address());
} ).on('error', (err) => {
	console.log(err);
}).on('close', () => {
	console.log('Socket server is closing...');
} );


setTimeout(function () {
	server.unref();
	setTimeout(function () {
		server.ref();
	}, 2048);
}, 2048);

