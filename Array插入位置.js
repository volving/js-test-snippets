function where(arr, num) {
	// Find my place in this sorted array.
	arr.sort(function(p,c){
		return p>c;
	});
	console.log(arr);
	var i;
	for(i=0; i< arr.length; i++){
		if(num <= arr[i]){
			return i;
		}
	}
	return arr.length;
}

console.log(where([5, 3, 20, 3], 5) );