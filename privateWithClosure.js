//var prison = (function () {
//	var prisoner_name 	= 'Mike Mikowski',
//		jail_term		= '20 years term'
//	;
//		
//	return {
//		prisoner: prisoner_name + ' - ' + jail_term,
//		sentence: jail_term
//	}
//})();
//
//console.log(prison.prisoner);
//prison.jail_term = 1024;
//console.log(prison.jail_term);



var prison = (function(){
	
	var prisoner_name 	= 'Mike Mikowski',
		jail_term		= '20 years term'
	;
	
	return {
		prisoner: function(){
			return prisoner_name + ' - ' + jail_term;
		},
		sentence: function () {
			return jail_term;
		},
		sets: function () {
			if(arguments[0]){
				prisoner_name = arguments[0];
				if(arguments[1]){
					jail_term = arguments[1];
				}
			}
		},
		set_name: function () {
			if(arguments[0]){
				prisoner_name = arguments[0];
			}
		},
		set_term: function () {
			if(arguments[0]){
				jail_term = arguments[0];
			}
		}
	}
})();

console.log(prison.prisoner());
console.log(prison.sentence());
prison.sets('Yuri','1 year');
prison.set_name('WangYI');
prison.set_term('9 years');
console.log(prison.prisoner());
console.log(prison.sentence());