//window.location.search.substring(1);
function show(msg){
	console.log(msg);
}

function prepend(arr, item) {
	var t = []
	if(arr && arr instanceof Array){
		if(item){
			t = t.concat(item, arr);
		}else{
			switch (String(item)) {
				case 'undefined':
					t = t.concat(undefined, arr);
					break;
				case 'null':
					t = t.concat(null, arr);				
					break;
				default:
					t = t.concat(NaN, arr);
					break;
			}
		}
	}
	return t;
}

//show(prepend([1, 2, 3, 4]), 'undefined');
//show(prepend([1, 2, 3, 4]), undefined);
//show(prepend([1, 2, 3, 4]), NaN);
//show(prepend([1, 2, 3, 4]), null);
show(prepend([1, 2, 3, 4], 10));

//输出例子:

//[10, 1, 2, 3, 4]