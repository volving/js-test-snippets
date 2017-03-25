// Question: How to get n numbers inbetween [2, 32]?

const LIMIT = 31;

function fn(n){
	if(typeof n === 'number' && !isNaN(n)){
		if(n > LIMIT){
			return new Error(`No more than ${LIMIT}!`);
		}
		var validAmount = 0;
		var obj = {};
		var item = 0;
		var result = [];
		for(;validAmount < n;){
			item = 2 + parseInt(Math.random() * 31);
			obj[item] = 1;
			result = Object.keys(obj)||[];
			validAmount = result.length;
		}
		return result;
	}
	return new Error(`Input parameter should be a valid number, but "${n}" entered!`);
}

console.log(fn(1));
console.log(fn(3));
console.log(fn(31));
console.log(fn(33));
console.log(fn('asd'));
console.log(fn());
