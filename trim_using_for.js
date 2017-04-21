var str = ' a09sdjf asd908hj23. aisodfn89 %    ';

var trim = function(str){
	var left = 0, len = str && str.length || 0, right = len, i;
	for (i = 0; i < len; i ++) {
		if (str[i] === ' ') {
			left ++;
		}else{
			break;
		}
	}
	for(i = len-1; i >= 0; i --){
		if (str[i] === ' ') {
			right --;
		}else{
			break;
		}		
	}
	if (right > left) {
		return str.substring(left, right);
	}
	return '';
	
}
var str = trim(str);
console.log(str+'::'+str.length);