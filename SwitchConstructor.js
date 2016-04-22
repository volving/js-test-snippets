var a = {
	a: 'a',
	b: 'b'
}

console.log(a.constructor === Object);

var b = ['a', 'b'];

console.log(b.constructor === Array);

var c = undefined;

var cs = function(obj){
	if (obj) {
		switch (obj.constructor) {
			case Object:
				console.log('Object');
				break;
			case Array:
				console.log('Array');
				break;
			default:
				console.log(obj.constructor);
				break;
		}
	}else{
		console.log('abc:',obj);
	}
}

cs(c);