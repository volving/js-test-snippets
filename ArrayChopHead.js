function slasher(arr, howMany) {
	// it doesn't always pay to be first
	if(howMany >= arr.length){
		return [];
	}
	return arr.slice(howMany-arr.length);
}

console.log(slasher([1, 2, 3], 1));
