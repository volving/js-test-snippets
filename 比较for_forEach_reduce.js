var a = [];
var i;

for(i = 0; i < 10240000; i++){
	a.push(i);
}
var t = Date.now();

console.log(t);
for(i = 0; i < a.length; i++){
	total += a[i];
}

var tt = Date.now();
console.log('Time elipsed:' + (tt - t));


var total = a.reduce(function (sum, elt, i) {
	return sum + elt;
})
var ttt = Date.now();
console.log('Time elipsed: ' + (ttt - tt));


a.forEach(function (elt, i) {
	total += elt;	
});

var tttt = Date.now();
console.log('Time elipsed: ' + (tttt - ttt));