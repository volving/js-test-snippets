var str = "I'm a little tea pot";

function titleCase(str) {
	str = str.toLowerCase();
	var tmp = str.split(' ');
	var arr = [];
	tmp.map(function(v){
		v = v[0].toUpperCase().concat(v.slice(1,v.length));
		console.log(v[0].toUpperCase());
		arr.push(v);
	});
	return arr.join(' ');
}

console.log(titleCase(str));




