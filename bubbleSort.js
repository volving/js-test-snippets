function bSort(arr){
	for(let flag = true, i=arr.length, j=i; flag && j>0;){
		if(i > 0){
			if(arr[i] < arr[i-1]){
				[arr[i-1],arr[i]] = [arr[i], arr[i-1]];
				flag = true;
			}
			i--;
		} else {
			j--;
			i=j;
		}
	}
	return arr;
}



var a = [1, 2, 9, 3, 4, 5];

console.log(bSort(a));
