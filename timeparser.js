var show = function(msg){
	console.log(msg);
}


var a,b = 'October 1, 2014', c = Date.now();

for(var i = 0; i < 1000000; i ++){
	a = Date.parse(b);
}
var d = Date.now()
console.log(d - c);

for(var i = 0; i < 1000000; i ++){
	a = new Date(b).getTime();
}
var e = Date.now();

show(e - d)