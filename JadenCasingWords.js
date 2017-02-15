var str = "How can mirrors be real if our 1eyes aren't real, ,others";
str.toUpperCase();


fun(str); 


function fun (str) {
	var reg = /(\b[\w\-\']+\b)/ig;

	var newStr = str;
	str.replace(reg, function ($1) {
		newStr = newStr.replace($1[0], $1[0].toUpperCase())
		
	});
	console.log(newStr)
	
}