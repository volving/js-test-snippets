var arr = [1, 3, 7, 9, 10];

var fun = function(variable){
	return Math.max.apply(this, arr);
}


console.log(fun(arr) === 10);