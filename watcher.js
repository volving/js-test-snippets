var fs = require('fs');
var events = require('events');
var util = require('util');

function Watcher(watchDir, cb) {
	if (watchDir) {
		this.watchDir = watchDir;
		this.process = cb;
		this.watch = function () {
			var watcher = this;
			fs.readdir(watchDir, function (err, files) {
				if (err) {
					console.log(err);
					return;
				}
				var f;
				for(f in files){
					console.log(f);
//					watcher.emit('process', files[f])
				}
			})
			watcher.on('process', cb(file));
		}
	}
}
util.inherits(Watcher, events.EventEmitter);



var distDir = './dist/';
var c_b = function (file) {
	console.log(file);
}

new Watcher('./', c_b);