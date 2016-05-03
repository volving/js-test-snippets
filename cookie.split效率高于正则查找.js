var c = '_ga=GA1.2.1492585801.1442249126; _octo=GH1.1.171192757.1442241523; tz=Asia%2FShanghai';

//console.log(cookie.indexOf('_ga'));

//console.log(cookie.indexOf(';', 33));

var name = '_ga';
//console.log(c.match(name + '=([a-zA-Z0-9\.%]+)'));


//var getCookie = function(name, cookieStr){
//	var cookie;
//	if (cookieStr) {
//		cookie = cookieStr;
//	}else{
//		cookie = document.cookie;
//	}
//
//	if (cookie && cookie.indexOf(name) > -1) {
//		return cookie.match(name + '=([a-zA-Z0-9\.%]+)')[1];
//	}
//	return;
//}
//
//console.log(getCookie(name, c));

function getCookie1(name) {
	var cookieValue = null;
	if (cookie) {
		var cookies = cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = jQuery.trim(cookies[i]);
			// Does this cookie string begin with the name we want?
			if (cookie.substring(0, name.length + 1) == (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
};

var getCookie = function(name, cookieStr){
	var cookie = cookieStr || c;
	if (cookie) { //&& cookie.indexOf(name) > -1
		return cookie.match(name + '=([a-zA-Z0-9\.%]+)')[1];
	}
	return;
}

var start = Date.now();
//console.log(Date.now());
for (var i = 0; i < 100000; i++) {
	getCookie(name);
}
console.log(Date.now() - start);