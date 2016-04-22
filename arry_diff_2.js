//function diff(arr1, arr2) {
	//	var newArr = [];
	//	// Same, same; but different.
	//	var elems = {};
	//	var i = 0;
	//	for(i = 0; i < arr1.length; i++){
	//		elems[arr1[i]] = 1;
	//	}
	//	
	//	for(i = 0; i < arr2.length; i++){
	//		elems[arr2[i]] = (elems[arr2[i]]?elems[arr2[i]]+1:1);
	//	}
	//	console.log(elems);
	//	for(i in elems){
	//
	//		if(elems[i] === 1){
	//			if(Number(i)){
	//              newArr.push(Number(i));
	//            }else{
	//              newArr.push(i);
	//            }
	//		}
	//	}
	//	return newArr;
	//}


	function diff(arr1, arr2) {
		var arrs = arr1.concat(arr2).sort();
		var newArr = [];
		var flag = 0;
		for (var i = 0; i <= arrs.length; i++) {
			if (arrs[i - 1]) {
				if (arrs[i - 1] === arrs[i]) {
					flag++;
				} else {
					if (flag === 0) {
						newArr.push(arrs[i - 1]);

					}
					flag = 0;
				}
			}
		}
		return newArr;
	}


	/*
	diff([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
	["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
	["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
	["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
	[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
	[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
	[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
	[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
	*/
