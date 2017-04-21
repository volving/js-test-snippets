var getCookieObject = function(cookieString) {
	var cookie = {};
	if (cookieString === '') {
		return cookie;
	}
	var attributes = cookieString.split('; ');
	if (attributes && attributes.length > 0) {
		var name,
			value,
			i,
			length,
			pivot,
			item;
		for (i = 0, length = attributes.length; i < length; i++) {
			item = attributes[i];
			pivot = item.indexOf('=');
			name = item.substring(0, pivot);
			value = decodeURIComponent(item.substring(pivot + 1));
			if(!isNaN(+value)){
				value = +value;
			}
			if (name) {
				cookie[name] = value;
			}
		}

	}
	return cookie;
};

var getCookieJSON = function(cookieString) {
	var cookie = {};
	if (cookieString === '') {
		return cookie;
	}
	var attributes = cookieString.split('; ');
	if (attributes && attributes.length > 0) {
		var name,
			value,
			i,
			length,
			pivot,
			item;
		for (i = 0, length = attributes.length; i < length; i++) {
			item = attributes[i];
			pivot = item.indexOf('=');
			name = item.substring(0, pivot);
			value = decodeURIComponent(item.substring(pivot + 1));
			if (!isNaN(+value)) {
				value = +value;
				if (value >= 571876200000) {
					value = new Date(value);
				}
			}
			if (name) {
				cookie[name] = value;
			}
		}

	}
	return cookie;

}

var a = "_ga=GA1.2.1492585801.1442249126; _octo=GH1.1.171192757.1442241523; tz=Asia%2FShanghai; age=1012341234123424";

//console.log(JSON.parse(a));
console.log(getCookieObject(a));