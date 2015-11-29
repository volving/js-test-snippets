var get_keys = require('./iterateObject.js')['getKeys'];
//(function (exports, require, module, __filename, __dirname){...})

var de_repeat = function(){
	console.log(__dirname);
	if (!arguments[0]) {
		return;
	}
	var tmp = arguments[0];
	if (typeof tmp !== 'string') {
		return;
	}
	tmp = tmp.replace(/[ ]+/g, ',')
		.replace(/[“”，、`~\!@#\$%^&\*()-=_+\[\]\{\}\\:;"'<>,\.\?\/]+/g, ',')
		.replace(/[,]{2,}/g, ',').replace(/,+$/g, '');
	tmp = tmp.split(',');
	var obj = {};
	tmp.map(function (c,i,arr) {
		if(c){
			obj[c] = 1;
		}
	});
	var r = get_keys(obj);
	return r;
}

a='asdf,sas ld kj ;;;oin ;asdf 8978*“足球”， “篮球”、8978*“足球”， “篮球”、“游泳”,“读书”、“看漫画”,8978*“足球”， “篮球”、“游泳”,“读书”、“看漫画”, “篮球”  “游泳”';
//a='asdf,sas ld kj ;;;oin ;asdf 8978*“足球”， “篮球”、“游泳”,“读书”、“看漫画”, “篮球”  “游泳”';
console.log(de_repeat(a));