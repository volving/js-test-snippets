//0x28 : 0010 1000
//0x3c : 0011 1100
var a = 0x28 & 0x3c;

console.log(a.toString(2));


var octetShift = function(abc){
	console.log(abc>>3);
	
	console.log(abc);
}

octetShift(0xff)