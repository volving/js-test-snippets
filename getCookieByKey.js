var getCookieValueByKey = function(cookie, key) {
	if (!key) {
		key = cookie;
		if (document) {
			cookie = document.cookie;
		} else {
			return null;
		}
	}
	if (cookie && cookie.length > 0) {///csrftoken=([\\w\\.\\_\\-\\+]+)(\\;)?\\b(\\s)*/
		var regex = new RegExp(key + '=([\\w\\.\\_\\-\\+]+)(?:\\;)?\\b(?:\\s)*', 'i');
		var cookies = cookie.match(regex);
		if (cookies && cookies.length > 0) {
			return cookies[1];
		}
		return null;
	}
	return null;
};
