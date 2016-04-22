var a = {
	a: 'a',
	b: 6,
	c: {
		c1: 'c1',
		c2: [1,2,3,4]
	}
};
//var b = new Buffer();
//var a_str = JSON.stringify(a, 'base64');
var a_str = JSON.stringify(a);
console.log(a_str);
var a_buf = new Buffer(a_str, 'base64');
console.log(a_buf.toString('base64'));



var aa = a['a'];

console.log(aa);
delete a['a'];

console.log(aa);