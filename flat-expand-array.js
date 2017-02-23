var arr = [1, [[2, 3], 4], 5, [[6, 7,[[8, 9,[[10, 11], 12], 13], 14], 15], 16],17];

function flatit(arr, result){
	result = result || [];
	var len = arr.length,
		tmp;
	for(let i = 0; i < len; i ++){
		tmp = arr[i]
		if(tmp.constructor === Array){
			result = result.concat(flatit(tmp));
		}else{
			result.push(tmp);
		}
	}
	return result;
}

function expand(target, result){
	result = result || [];
	var len = arr.length,
		tmp;
	for(let i = 0; i < len; i++){
		tmp = target[i];
		if(tmp){
			if(tmp.__proto__.constructor === Array){
				expand(tmp, result);
			}else{
				result.push(tmp)
			}
		}
	}
	return result
}

console.log(flatit(arr));

console.log(expand(arr));

////如果确认数组中没有','

var str = '' + arr;

console.log(str.split(','));