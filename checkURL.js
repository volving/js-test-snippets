var strRegex = "^((((https|http|ftp|rtsp|mms)?:\\/\\/)"
	+ "?(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?" //ftp的user@
	+ "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
	+ "|" // 允许IP和DOMAIN
	+ "([0-9a-zA-Z_!~*'()-]+\.)*)" // 域名- www.
	+ "([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z]\." // 二级域名
	+ "[a-zA-Z]{2,6})" // first level domain- .com or .museum
	+ "(:[0-9]{1,4})?" // 端口- :80
	+ "((/?)|" + "(/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?)$"
	+ ')'
	+ '|' // 允许相对路径
	+ '((\\.\\/)?([\\.]?[\\w\\-\\_]+)+([\\/\\w\\d\\-\\_\\~\\!\\*])?[^\\.]$)';
console.log(strRegex);
var reg = new RegExp(strRegex, 'i');
console.log(reg);
console.log(reg.test(''));
