// No.1
var reverse_string = function (str) {
	if(typeof str !== 'string'){
		return;
	}
	var 
		tmp = str.split('').reverse();
	
	return tmp.reduce(function (p, c, i) {
		return p.concat(c);
	});
}
// No.2
var reverse_string2 = function (str) {
	if(typeof str !== 'string'){
		return;
	}
	var 
		tmp = str.split('');
	return tmp.reduce(function (p, c, i) {
		return c.concat(p);
	});
}
// No.3
var reverse_string3 = function (str) {
	if (typeof str !== 'string') {
		return;
	}
	var
		a = str.split('');
		
	return a.reverse().toString();
	
}
console.log(new Date().getMilliseconds());
console.log(reverse_string('abcdefg'));
console.log(new Date().getMilliseconds());
console.log(reverse_string2('abcdefg'));
console.log(new Date().getMilliseconds());
console.log(reverse_string3('abcdefg'));
console.log(new Date().getMilliseconds());

// No.2 works faster than No.1