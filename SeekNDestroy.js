function destroyer(arr) {
	// Remove all the values
	var args = Array.prototype.slice.call(arguments, 1, arguments.length);
	var i,
		map = {};
	for(i = 0; i < args.length; i++){
		map[args[i]] = 1;
	}
	return	arguments[0].filter(function(v){
		if(map[v] === 1){
			return false;
		}
		return true;
	});
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
