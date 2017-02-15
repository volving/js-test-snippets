//console.log(Math.floor(Math.random()*6));

var a = [0, 1, 2, 3, 4, 5];

//a.splice();
//console.log(a);


function shuffle(arr){
	var index,
		shuffled = [];
	while(arr.length > 0){
		index = Math.floor(Math.random() * arr.length);
		shuffled.push(arr[index]);
		arr.splice(index, 1);
	}
	return shuffled;
}


console.log(shuffle(a));