/**
 * About cookies: QIDS(query, insert, delete, and select)
 */

function hasCookie(key) {
    if (!key) {
        return false;
    }
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
}

function getCookie(key) {
    if (!key) {
        return null;
    }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}

function getCookieArray() {
    var cookies = document.cookie;
    var rawArray = [];
    var cookieArray = [];
    if (cookies) {
        rawArray = cookies.split('; ');
        rawArray.sort();
        cookieArray = rawArray.map(function(elem, index, arr) {
            var tmp = elem.trim().split('=');
            return tmp;
        });
    }
    return cookieArray;
}

function getCookies() {
    return getCookieArray();
}

function setCookie(key, value, end, path, domain, secure) {
    if (!key || /^(?:expires|max\-age|path|domain|secure)$/i.test(key)) {
        return false;
    }
    var expires = "";
    if (end) {
        switch (end.constructor) {
            case Number:
                expires = end === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + end;
                break;
            case String:
                expires = "; expires=" + end;
                break;
            case Date:
                expires = "; expires=" + end.toUTCString();
                break;
        }
    }else{
        expires = "; expires=0"; // for browser session support~ [issue: #001]
    }
    document.cookie = encodeURIComponent(key) + "=" + encodeURIComponent(value) + expires + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "") + (secure ? "; secure" : "");
    return true;
}

function setCookies(cookies) {
    if (cookies && cookies instanceof Array && cookies.length) {
        cookies.map(function(elem, index, arr) {
            setCookie(elem[0], elem[1]);
        });
    }
}

function removeCookie(key, path, domain) {
    if (!hasCookie(key)) {
        return false;
    }
    document.cookie = encodeURIComponent(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (domain ? "; domain=" + domain : "") + (path ? "; path=" + path : "");
    return true;
}

function getKeys() {
    var keys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var len = keys.length, index = 0; index < len; index++) {
        keys[index] = decodeURIComponent(keys[index]);
    }
    return keys;
}

function resetCookies() {
    var array = arguments[0];
    if (array && array instanceof Array && array.length) {
        // console.log(array);
        var cookies = getCookies();
        if (cookies) {
            cookies.map(function(elem, index, arr) {
                removeCookie(elem[0]);
            });
        }
        array.map(function(elem, index, arr) {
            setCookie(elem[0], elem[1]);
        });
    } else {
        console.log('--------------');
    }

}


