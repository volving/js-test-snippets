var get_keys = function(obj){
	var 
		keys=[];
		
	if (typeof obj !== 'object') {
		return;
	}
	
	for( item in obj){
		if(obj.hasOwnProperty(item)){
			keys.push(item);
		}
	}
	return keys;
}

module.exports.getKeys = get_keys;