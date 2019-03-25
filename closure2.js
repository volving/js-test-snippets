for (var i = 1; i < 10; i++) {
	console.log(i);
}
console.log('---------------------------------');
for (let m = 1; m < 10; m++) {
	console.log(m);
}
console.log('---------------------------------');
console.log('///', i);
console.log('---------------------------------');
for (var j = 1; j < 10; j++) {
	setTimeout(function () {
		console.log('var', j);
	}, 100)
}
console.log('---------------------------------');
for (let j = 1; j < 10; j++) {
	setTimeout(function () {
		console.log('let', j);
	}, 100)
}

console.log('---------------------------------');

for (var k = 1; k < 10; k++) {
	(function (kk){
		setTimeout(function () {
			console.log(kk);
		}, 100);
	})(k);
}


