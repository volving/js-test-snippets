function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done');
	});
}

timeout(100).then((value) => {
	console.log(value);
});

var promise = new Promise(function(resolve, reject){
	console.log('Promis start!');
	resolve();
});

promise.then(function(){
	console.log('Resolved.');
});

console.log('Hi!');