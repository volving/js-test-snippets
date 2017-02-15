function* gen(x){
	console.log('heya');
	var y
	yield  y =  x + 2;
	return y;
}


var g = gen(1);
var p = g.next();
console.log(p);
console.log(p.value);
p.value = 9
console.log(g.next());

////////////////////
console.log('\n');

function* gen2(x){
	console.log('heya');
	var y =	yield;
	return y;
}


g = gen2(1);


console.log(g.next());
console.log(g.next({key: 'value'}));
