var a = {
	type: 0x01,
	fcnt: 1024,
	name: 'coffeeee'
};
console.log(a);

var aa = JSON.stringify(a);

var b = new Buffer(aa);

console.log(b);
console.log(new Buffer(aa));
var bb = b.toString('utf-8');
console.log(bb);
console.log(JSON.parse(bb));