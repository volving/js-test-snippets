function once(fn, ctx){
	var result;
	return function(){
		if(fn){
			result = fn.apply(ctx || this, arguments);
			fn = null;
		}
		return result;
	}
}