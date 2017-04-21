/**************************************processing*********************************/
$(function() {

    var paraMap = new Map();
    initQueryMap(paraMap);
    removeOtherCategoryItemInMap(paraMap);

    var byPrice = 0;
    var priceSort = 0;
    var paraArray = getValidParaArray();

    //add class(selected) to specified element
    if (paraArray) {
        paraArray.map(function(item, index, arr) {
            if (item[0].indexOf('category') == 0 && (typeof Number(item[1]) == 'number') && (Number(item[1]) < 4 && Number(item[1]) > 0)) {
                $('#' + item[0] + '-' + item[1]).addClass('selected');
                $('.' + item[0] + '-' + item[1]).removeClass('category-invisible');
                paraMap.set('category', item[1]);

            } else if (item[0].indexOf('prop') == 0 && (typeof Number(item[1]) == 'number' && Number(item[1] > -1))) {
                // $('#' + item[0]).removeClass('category-invisible');
                paraMap.set(item[0], item[1]);
                $('#' + item[0] + '-' + item[1]).addClass('selected');
            } else if (item[0].indexOf('sort') == 0) {
                $('.sort').removeClass('selected');
                $('#' + item[0] + '-' + item[1]).addClass('selected');
                if (item[1] == 'price_highest') {
                    byPrice = 1;
                }
                paraMap.set(item[0], item[1]);
            }
        });
    }

    if (byPrice) {
        $('#sort-price_highest').removeClass('show');
        $('#sort-price_lowest').addClass('show');
    } else {
        $('#sort-price_highest').addClass('show');
        $('#sort-price_lowest').removeClass('show');
    }

    // Bind onClick event listener
    $('.selectable').click(function() {
        var id = this.id || '';
        if (id && id.length) {
            if ((id.indexOf('category') == 0) || (id.indexOf('prop') == 0) || (id.indexOf('sort') == 0)) {
                var kv = getPara(id);
                var stored = paraMap.get(kv[0]);

                if (stored && stored == kv[1]) {
                    if (kv[0] == 'category') {
                        paraMap = new Map();
                    } else {
                        paraMap.delete(kv[0]);
                    }
                } else {
                    if (kv[0] == 'category') {
                        paraMap.set(kv[0], kv[1]);
                        removeOtherCategoryItemInMap(paraMap, kv[1]);
                    } else {
                        paraMap.set(kv[0], kv[1]);
                    }
                }
                jump(paraMap);
            }
        }

    });

});
/************************************end of processing*******************************/
