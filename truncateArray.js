//window.location.search.substring(1);
function show(msg){
	console.log(msg);
}

function truncate(arr) {
	var t = [];
	if(arr && arr.length && arr instanceof Array){
		t = arr.slice(0,arr.length-1);
    }
	return t;
}


show(truncate([1, 2, 3, 4]));