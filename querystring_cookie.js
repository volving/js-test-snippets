/************************************predefined*********************************/
/**
 * query String
 * @return {[type]} [description]
 */
function getQueryString() {
    return window.location.search.substr(1);
}

/**
 * format query string into an array of binary arrays
 * @return array
 */
function getQueryParasArray() {
    var qs = arguments[0] || getQueryString();
    // console.log('qs:' + qs);
    if (qs) {
        var paraArr = qs.split('&');
        // console.log(paraArr);
        if (paraArr) {
            var paras = paraArr.map(function(item, index, paraArr) {
                return item.split('=');
            });
            return paras; //[[para,val1],[para,val2]...]
        }
        return;
    }

}

/**
 * both key and value are essential, otherwise kick off
 * @return {[type]}
 */
function getValidParaArray() {
    var qs = arguments[0] || getQueryString();
    // console.log(qs);
    if (qs) {
        // var paraArr = qs.split('&');
        var paraArr = getQueryParasArray();
        if (paraArr) {
            /*
                        var paras = paraArr.map(function(item, index, paraArr) {
                            return item.split('=');
                        });*/
            var paras = paraArr;
            var validParas = [];
            for (var i = paras.length - 1; i >= 0; i--) {
                if ((paras[i][0] && paras[i][1])) {
                    validParas.push([paras[i][0], paras[i][1]]);
                }
            };
            /*
            console.log('0-0-0-00-0-0-0-0-0-0-0-00---0-0-0-0-0');
            console.log(validParas);
            */
            return validParas; //[[para,val1],[para,val2]...]
        }
        return;
    }
}

/**
 * filter out unrelated prop cookies depending on the first digit of category number and prop number
 * @param  {[type]} category [description]
 * @return {[type]}          [description]
 */
function filterCookie(category) {

    if (!category) {
        category = getCookie('category');
    }
    if (category) {
        var cookieArray = getCookieArray();
        if (cookieArray && !isNaN(+category) && (typeof + category == 'number')) {
            cookieArray.map(function(elem, index, arr) {
                if (elem[0]) {

                    if (elem[0].indexOf('prop') && !elem[0].indexOf('prop' + category)) {
                        removeCookie(elem[0]);
                    }
                }
            });
        }
    }
}
/**
 * concatenate the paras to make a valid queryString
 * @param  {[type]} paraArray [description]
 * @return {[type]}           [description]
 */
function makeQueryString(paraArray) {
    var pa = paraArray || arguments[0] || getCookieArray();
    var qs = '';

    if (pa && pa.length) {
        pa.map(function(item, index, arr) {
            if (qs.length) {
                // qs.concat('&', item[0], '=', item[1]);
                qs = qs + '&' + item[0] + '=' + item[1];
            } else {
                // qs.concat('?', item[0], '=', item[1]);
                qs = qs + '?' + item[0] + '=' + item[1];
            }
        });
        return qs;
    }

    return '';
}


function tapCookie($t) {
    var id = $t.attr('id');
    var i = id.indexOf('-');
    var key = id.slice(0, i);
    var value = id.slice(++i, id.length);
    setCookie(key, value);
    getCookies().map(function(item, index, arr) {
        if (item[0] > key) {
            removeCookie(item[0]);
        }
    });

}

/**
 * redirect to specified url(usually with queryString)
 * @return {[type]} [description]
 */
function jump() {
    filterCookie();
    // var paraArray = getValidParaArray(getCookieArray());

    // console.log(paraArray);
    var qs = makeQueryString(getCookieArray());
    console.log(qs);

    window.location.href = window.location.pathname + qs;

}

/*********************************end of predefined********************************/



/**
 * binding all actions after page loaded, self executed!
 * @param  {[type]} ) {                   (function() {        var cookies [description]
 * @return {[type]}   [description]
 */
$(function() {
    /**
     * 1. wash out the unneeded query paras
     * 2. set the specified selectables selected
     * @return {[type]} [description]
     */
    (function() {
        var cookies = getCookieArray();
        // console.log(cookies);
        if (cookies && cookies.length) {
            cookies.map(function(item, index, arr) {
                if (item[0].indexOf('prop') == 0) {
                    removeCookie(item[0]);
                }
            });
        }
        // var paraArray = getQueryParasArray();
        // console.log(getCookieArray());
        var vpa = getValidParaArray(); //Valid Parameter Array

        setCookies(vpa);

        cookies = getCookieArray();
        // console.log(cookies);

        if (cookies && cookies.length) {
            var category = getCookie('category');
            /*
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            console.log(category);
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
            */
            if (category && !isNaN(category) && typeof(+category) == 'number') {
                getCookies().map(function(item, index, arr) {
                    if (item[0]) {
                        if (item[0].indexOf('prop') == 0 && !(item[0].indexOf('prop' + category) == 0)) {
                            // validParaArray.push((item[0], item[1]));
                            // console.log(getCookies());
                            removeCookie(item[0]);
                            // console.log(getCookies());
                            return;
                        }
                    }
                });
            }
        }
        // add selected class
        var byPrice = 0; //0 for sort-price_lowest, 1 for sort-price_highest
        var priceSort = 0;
        getCookieArray().map(function(item, index, arr) {
            if (item[0].indexOf('category') == 0) {
                $('#' + item[0] + '-' + item[1]).addClass('selected');
            } else if (item[0].indexOf('prop') == 0) {
                $('#' + item[0]).removeClass('category-invisible');
                $('#' + item[0] + '-' + item[1]).addClass('selected');
            } else if (item[0].indexOf('sort') == 0) {
                $('.sort').removeClass('selected');
                $('#' + item[0] + '-' + item[1]).addClass('selected');
                console.log(item[1]);
                // priceSort = 1;
                if (item[1] == 'price_highest') {
                    byPrice = 1;
                }
            }
        });
        // alert(byPrice);
        if (byPrice) {
            $('#sort-price_highest').removeClass('show');
            $('#sort-price_lowest').addClass('show');/*
            if(priceSort){
                $('#sort-price_lowest').addClass('selected');
            }*/

        } else {
            $('#sort-price_highest').addClass('show');
            $('#sort-price_lowest').removeClass('show');/*
            if(priceSort){
                $('#sort-price_highest').addClass('selected');
            }*/
        }
        
    })();
    /*
        $('.selectable').click(function() {

            var $t = $(this);
            var id = $t.attr('id');
            var i = id.indexOf('-');
            var key = id.slice(0, i);
            var value = id.slice(++i, id.length);
            // console.log('cookie:'+key+'\tvalue:'+value);
            setCookie(key, value);

            switch(key){
                case 'category':
                    setCookie(key, value);
                    break;
                case 'sort':
                    setCookie(key, value);
                    break;
                default:
                    setCookie(key, value);
                    break;
            }
        });
    */


    $('.selectable').click(function() {
        var $pp = $(this);
        var test = $pp.attr('name');
        console.log(test);
        var index = 0;
        /***/
        tapCookie($pp);
        /***/
        var name = '';
        var selector = '';
        var $tmp = null;
        $pp.parent().children().removeClass('selected');
        $pp.addClass('selected');

        if (test.indexOf('category') == 0) {
            index = $pp.parent().index();
            name = test;
            selector = '.category:eq(' + index + ')[name=' + name + '],.category:gt(' + index + ')[name=' + name + ']';
            // $pp.addClass('selected');
        } else if (test.indexOf('prop') == 0) {
            $pp = $pp.parent().parent();
            index = $pp.index() - 1;
            name = $pp.attr('name');
            selector = '.category:gt(' + index + ')[name=' + name + ']';
        } else if (test.indexOf('sort') == 0) {
            /*
            console.log(test);
            var priceBy = test.slice(test.indexOf('-')+1, test.length);
            console.log(priceBy);
            */
            jump();
            // console.log('Sort:' + test);
        }

        // console.log(index + ':' + name + '>>>' + selector);
        $('.category[name!=' + name + ']').addClass('category-invisible');
        $tmp = $(selector);
        $tmp.addClass('category-invisible');
        $tmp.children().children().filter('.selectable').removeClass('selected');
        $tmp.first().toggleClass('category-invisible');

    });

    $('input[type=submit], .submit').click(jump);
});
