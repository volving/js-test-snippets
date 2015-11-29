function largestOfFour(arr) {
	// You can do this!
	var i,j,lgst,
		tmp = [];
	for(i = 0; i < arr.length; i++){
		lgst = -1;
		for(j = 0; j < arr[i].length; j++){

			if(arr[i][j] > lgst){
				lgst = arr[i][j];
			}
		}
		tmp.push(lgst);
	}
	return tmp;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
