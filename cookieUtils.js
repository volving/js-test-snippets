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