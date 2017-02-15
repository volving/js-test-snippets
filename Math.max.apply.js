var arr = [3, 5, 7, 2, 9];

var result = arr.reduce(function(pre, cur){
	return Math.max(pre, cur);
});

console.log(result);


//console.log(Math.max(3, 5, 7, 2, 9));

console.log(Math.max.apply(null, arr));