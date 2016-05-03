var trim = function(text) {
	return text === null?'':(text+'').replace(/[\s]+$/, '').replace(/^([\s]+)/, '');
};

console.log(trim('  alskjdfo aosdin as adsoan98y 9bh ijuh98    '));