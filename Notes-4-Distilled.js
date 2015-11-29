//Number.toPrecision(p)

function log(msg) {
	console.log(msg);
}

/*
log(Number(6).toPrecision(3));

var a = Math.PI.toPrecision(20);

log(a+'||'+a.charAt(-3,0))

var b = ['a', 'b', 7, 8];
log(b[2])
*/



/*
var s,e;
var i=0;
var s = '';
var t = 10000000;
for (i = 0; i < t; i++) {
	s.concat(i);
//	s+=i;
}

*/

/*
var s = 'hello-world-you-ass-kicker';
var ss = s.replace('-', ' ');
log(ss);
ss = s.replace(/\-/g, ' ');
log(ss);

*/

/*
var txt = 'bsdBBsd,Csd';

var reg = /([A-Z]+[^\s,]*)/g;
var r = txt.match(reg);
log(r);
var rr = txt.replace(reg, function (m) {
	return '-'.concat(m);
});
log(rr);

*/
/*
var txt = 'AsdfasBaasd9,aslkdj';
var reg = /a/;
log(reg.hasOwnProperty('test'))
log(reg.test);
*/


var k = 0987;
log(k)
log(+(k.toString()));
