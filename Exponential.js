
var getPowers = function (exp) {
	if(!exp || 'number' !== typeof Number(exp)){
		return console.log;
	}
	return function (base) {
		if(!base || 'number' !== typeof Number(base) ){
			return NaN;
		}
		var tmp = base;
		for ( i = 1; i < exp; i++ ){
			tmp *= base;
		}
		return tmp;
	}
}

var triple = getPowers('4');

console.log(triple('77'));