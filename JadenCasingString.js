String.prototype.toJadenCase = function(){
	return this.replace(/(^|\s|[^A-Za-z0-9_'])[a-z]/g, function(x){	return x.toUpperCase(); });
}
function jadenCasingString(){
	var i ,j;
	var nStr = "";
	for (i = 0;i < arguments.length;i++){
		if(typeof arguments[i] == "string"){
			nStr += arguments[i].toJadenCase();
		}
		else{
			for (j = 0;j < arguments[i].length;j++){
				nStr += jadenCasingString(arguments[i][j]);
			}
		}
	
	}
	return nStr;
}

var cite = "How can mirrors be real if our 1eyes aren't real, ,others ak47";

console.log(jadenCasingString(cite, [' knight', '991event', ['King\'s hand', '1world one Dr3am']]));