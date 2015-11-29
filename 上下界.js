var min = 1,
	max = 15;	

//包含min, max
var genWithBorders = function(){
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//不包含min, max
var genNoBorders = function(){
	return Math.floor(Math.random() * (max - min - 1 )) + min + 1;
};

//不包含min
var genNoLowerborder = function () {
	return Math.floor(Math.random() * (max - min)) + min + 1;
}

//不包含max
var genNoLowerborder = function () {
	return Math.floor(Math.random() * (max - min)) + min;
}


//对于数组的情形：
var arr = [];


//能取到0～length－1
var genNoLowerborder = function () {
	return arr[Math.floor(Math.random() * arr.length)];
}

//取 min ~ max(min-1 ~ max-1)

var genNoLowerborder = function () {
	return arr[Math.floor(Math.random() * (max - min)) + min - 1];
}
