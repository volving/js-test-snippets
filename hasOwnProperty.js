var _ = require('underscore');

var obj = {
	show: function () {
		console.log('Show called!');
	},
	name: 'obj'
}


console.log(obj.hasOwnProperty('show'));

console.log(_.has(obj, 'show'));