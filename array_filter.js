var a = [];
var i;
for (i=0; i < 20; i ++) {
	a.push(i);
}

console.log(a);

var b = a.filter(function (elt, i){
	return elt > 10;
})

console.log(b);