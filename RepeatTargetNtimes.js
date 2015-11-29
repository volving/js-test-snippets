function repeat(str, num) {
	// repeat after me
	var tmp='';
	while ( num > 0 ){
		console.log(num);
		tmp = tmp.concat(str);
		num--;
	}
	return tmp;
}

console.log(repeat("abc", 3));
