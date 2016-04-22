var time = Date.now();
console.log(time);

var date = new Date(time);

console.log(date.getFullYear());
console.log(date.getYear() 		+ 1900);

console.log(date.getMonth() 	+ 1);
console.log('\n');

console.log(date.getDate());
console.log(date.getUTCDate());
console.log('\n');


var week = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saterday'
];
console.log(week[(date.getDay() % 7)]);
console.log(week[(date.getUTCDay() % 7)]);

console.log(date.getHours());
console.log(date.getUTCHours());
console.log('\n');

console.log(date.getMinutes());
console.log(date.getUTCMinutes());

console.log(date.getSeconds());
console.log(date.getUTCSeconds());
console.log('\n');

console.log(date.getUTCMilliseconds());
console.log(date.getMilliseconds());
console.log('\n');

var time2 = Date.now();

console.log(time2 - time);