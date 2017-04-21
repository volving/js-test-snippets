var fns = [];

for(let i = 0; i < 5; i ++){
	fns.push(() => {
		console.log(i);
	})
}

fns.forEach(fn=>fn());

console.log('\n-----------\n');

var fns2 = [];
for(var i = 0; i < 5; i ++){
	var fn = (function(ii){
		return function(){
			console.log(ii);
		}
	})(i);
	fns2.push(fn);
}

fns2.forEach(fn=>fn());
