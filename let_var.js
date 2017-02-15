var a = [];
for (var i = 0; i < 10; i++) {
	a[i] = (function (ii) {
		return function(){
			console.log(ii);
		}
	})(i);
}
a[6](); // 10


var b = [];
for (let i = 0; i < 10; i++) {
	b[i] = function(){
			console.log(i);
	};
}
b[6](); // 6