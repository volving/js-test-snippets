var a = 'abc.Abc.*lni  a_kkla';
a = a.toLowerCase();
var tmp = a.replace(/[\W_]+/gi, '');
console.log(tmp);