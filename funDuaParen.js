//var add.prototype.isSingle = false;
var add = function() {
	if (arguments.length === 1) {
		if (add.prototype.isSingle) {
			arguments[0] += add.prototype.isSingle;
			add.prototype.isSingle = false;
			return arguments[0];
		} else {
			add.prototype.isSingle = arguments[0];
			return add;
		}
	} else if (arguments.length > 1) {
		var sum = 0,
			i = 0;
		for (i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		return sum;
	}
}
var s = add(2, 5, 9, 33);
var t = add(2)(5);
	t = add(3,2);
	t = add(3)(3);
	t = add(4);
	t = add(3);
	t = add(9);
	t = add(7);
//var s = add(2)(5);

console.log(t);

console.log(add);
