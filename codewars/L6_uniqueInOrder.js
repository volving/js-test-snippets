/*
	Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
	For example:
	uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
	uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
	uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function(iterable) {
		//your code here - remember iterable can be a string or an array
		var keys = [],size=0, len=0;
		if (iterable) {
			for(len = iterable.length; len--; ){
				if(keys[size-1] === iterable[len]){
					continue;
				}
				size++;
				keys.push(iterable[len]);
			}
		}
		return keys.reverse();
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'),['A','B','C','D','A','B'])