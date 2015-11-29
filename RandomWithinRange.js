//Range of random numbers
var inst = function(a,b){
	var min = a;
	var max = b;
	return function(){
		return Math.floor(min + Math.random()*(max - min + 1));
	}
}
var gen = inst(1,3);

console.log(gen());