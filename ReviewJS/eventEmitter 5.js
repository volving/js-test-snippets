var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection', function () {
	console.log('connection in');
	eventEmitter.emit('process');
});

eventEmitter.on('process', () => {
	console.log('Processing...');
	eventEmitter.emit('done');
});

eventEmitter.on('done', () => {
	console.log('process done!');
});



eventEmitter.emit('connection');