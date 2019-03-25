function cloneFn(fn) {
	if(fn && fn.__proto__ === Function.prototype) {
		return (Function('return ' + fn.toString())())
	} else {
		return false;
	}
}


/* Test */
function ab(v) {
	v = v << 1;
	console.log(v)
	return v;
}

let a = 3;

console.log(ab(3) === cloneFn(ab)(3));