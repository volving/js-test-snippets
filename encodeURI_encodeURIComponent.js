var encoded = encodeURI('< ;中国guo-+&^%');
console.log(encoded);

var decoded = decodeURI(encoded);
console.log(decoded);


encoded = encodeURIComponent('< ;中国guo-+&^%')
console.log(encoded);


decoded = decodeURI(encoded);
console.log(decoded);

decoded = decodeURIComponent(encoded);
console.log(decoded);
/*
%3C%20;%E4%B8%AD%E5%9B%BDguo-+&%5E%25
< ;中国guo-+&^%
%3C%20%3B%E4%B8%AD%E5%9B%BDguo-%2B%26%5E%25
< %3B中国guo-%2B%26^%
< ;中国guo-+&^%
*/