var Car = function () {
	var key = 3;
	this.name = arguments[0]||'';
	this.model = arguments[1]||0;
	console.log(key);
	this.getKey = function(){
		return key;
	}

}

var myCar = new Car('BMW', 2015);

console.log(myCar.getKey());