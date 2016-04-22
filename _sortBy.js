var _ = require("underscore");

var stooges = [{name: 'moe', age: -40}, {name: 'larry', age: -90}, {name: 'curly', age: -60}];

console.log(stooges);

stooges = _.sortBy(stooges, function(elem){
	console.log(elem.age,'--');
	return -elem.age
});

console.log(stooges);
