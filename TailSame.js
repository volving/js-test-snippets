function end(str, target) {
	// "Never give up and good luck will find you."
	// -- Falcor
	var len = target.length;
	if(str.substr(str.length-len, str.length-1) === target){
		return true;
	}
	return false;
}

console.log(end("Bastian", "nw"));
