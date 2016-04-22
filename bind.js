//console.error.bind(console, 'connection error')('errrrrrrrrrrrrror')

//---更加实际的例子

var fun = function (cb, msg) {
	cb(msg);
}

fun(console.error.bind(console, 'connection error'), 'abc');