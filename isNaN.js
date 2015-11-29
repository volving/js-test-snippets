var show = function (msg) {
	console.log(msg);
}


show('number' === typeof NaN);	//true
show(typeof null);	//object
show(typeof undefined); // undefined

show( isNaN(NaN) && 'number' === typeof NaN); // true

var testNaN = function(v){
	if(isNaN(v) && 'number' === typeof v){
		console.log('NaN');
	}else{
		console.log(v);
	}
}
show('----------------------------------');
testNaN(undefined);
testNaN(null);
testNaN(NaN);
