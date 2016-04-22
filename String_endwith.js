String.prototype.endwith = function(appendix){
	if (this.length >= appendix.length) {
		if (this.substr(-appendix.length) === appendix) {
			return true;
		}
	}
	return false;
};

//---------------------------
var a = 'abc---lmn';

console.log(a.endwith('mn')); //should be true
console.log(a.endwith('asdfasdfasdfasdfabc---lmn')); //should be false