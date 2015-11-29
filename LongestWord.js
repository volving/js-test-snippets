function findLongestWord(str) {
	
	var tmp = str.split(' ');
	var lgst = 0;
	var lw = '';
	tmp.map(function (v) {
			if(v.length > lgst){
					lgst = v.length;
					lw = v;
			}
	});

	return lgst;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
