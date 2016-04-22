var a = 'abcde';
var b;
console.log(b = new Buffer(a));


var c = new Buffer(4);
b.copy(c, 1, 1,c.length)

console.log(c);