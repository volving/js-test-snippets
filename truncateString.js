function truncate(str, num) {
	// Clear out that junk in your trunk
	var len = str.length;
	if(len <= num){
		return str;    
	}else if(num > 3){
		return (str.slice(0, num-3).concat('...'));
	}else{
		return str.slice(0, num).concat('...');
	}

}

//truncate("A-tisket a-tasket A green and yellow basket", 11) should return "A-tisket...".
//truncate("Peter Piper picked a peck of pickled peppers", 14) should return "Peter Piper...".
//truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".
//truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".
//truncate("A-", 1) should return "A...".
