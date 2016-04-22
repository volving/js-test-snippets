var a = [
	{a: 'a', rssi: -21},
	{c: 'c', rssi: -99},
	{b: 'b', rssi: -62},
];

a.sort(function (a, b){
	return	a.rssi - b.rssi;
})
console.log(a);
console.log('-------------');


var b = a.filter(function (elt, i){
	return elt.rssi > -30;	
});

console.log(a);
console.log('-------------');

b.sort(function(a,b){
	return a.rssi - b.rssi;
})
console.log(b);