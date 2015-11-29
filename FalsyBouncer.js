function bouncer(arr) {
	// Don't show a false ID to this bouncer.
	return	arr.filter(function(v){
		if(!v){
			return false;
		}
		return true;
	});
}

console.log(bouncer([7, "ate", "", false, 9]));

