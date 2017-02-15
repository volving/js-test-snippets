String.prototype.repeatify = String.prototype.repeatify || function (times) {
	var str = '';

	for (var i = times; i--;) {
		console.log(i);
		str += this;
	}

	return str;
};


console.log('1  '.repeatify(6))