let sum = function() {
	let args = Array.from(arguments);
	let raw = args.filter(i => {
		if (i && typeof i ==='number' && !isNaN(i)) {
			return true;
		}
		return false;
	})
	raw.map(i => {
		sum.total += i;
	});
	return sum;
}

Object.defineProperty(sum, 'total', {
	value: 0,
	writable: true
});

sum.valueOf = function() {
	let result = this.total;
	this.total = 0;
	console.log(result)
	return result;
}

sum(1,2)(3).valueOf()
sum(4)(3,2,1)(5,6).valueOf()
