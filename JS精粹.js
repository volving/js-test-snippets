// 不同的invocation方式，绑定的this不同
function log(msg) {
	console.log(msg);
}
/****方法调用****/
var val = 'outermost';
var a = {
	val: 'outerValue',
	show: function () {
		val = 'innerValue';
		log(this.val); 	// 'outerValue'
		log(val);		// 'innerValue'
		return this.val;  //在对象方法中，this被绑定到该对象上，而非方法中。
	}
}

a.show()


/****函数调用****/

var b = function () {
	var val = "innerValue";
	log(this.val);
	log(val);
}

b();