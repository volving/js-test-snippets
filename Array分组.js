function chunk(arr, size) {
	// Break it up.
	var i,
			ic = 0,
//      oc = 0,
			inner = [],
			outer = [];
	for(i = 0; i < arr.length; i++){
		if(ic == size){
			outer.push(inner);
			inner = [];
//      oc++;
			ic=0;
		}
		inner.push(arr[i]);
		ic++;
	}
	outer.push(inner);

	return outer;
}

console.log(chunk(["a", "b", "c", "d", "e"], 2));
