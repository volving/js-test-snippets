function mutation(arr) {
	var tmp = arr[0].toLowerCase();
	var aim = arr[1].toLowerCase().split('');
	var i;
	for(i = 0; i < aim.length; i++){
		console.log(aim[i]);
		if(tmp.indexOf(aim[i])===-1){
			return false;
		}
	}
	return true;
}

console.log(mutation(["hello", "hey"]));
