//String.prototype.toJadenCase = function () {
//	if(this.length > 0){
//		var words = ('' + this).split(' '),
//			h;
//		words = words.map(function(word){
//			h = word[0].toUpperCase();
//			return h+word.slice(1);
//		});
//		return words.join(' ');		
//	}
//};

//String.prototype.toJadenCase = function () {
//	return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
//};

String.prototype.toJadenCase = function () { 
	var length = 0, 
		index = 0;
	return this.split(" ").map(function(word){
		var tmp;
		while(length>0 && index <= length){
			word
			if(/[A-z]/.test(word[index])){
				index++;
			}else{
				word.charAt(0).toUpperCase();
			}
		}
		return word.charAt(0).toUpperCase() + word.slice(1);
	}).join(" ");
}

var str = "How can mirrors be real if our eyes aren't real, ,others";
var s = Date.now();
console.log(str.toJadenCase());
console.log(Date.now() - s);

