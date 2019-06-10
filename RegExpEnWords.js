let reg = /^[\w\d]+(-?[\w\d]+)*$/

console.log(reg.test('asdf-as1'))
console.log(reg.test('中文-as1'))
console.log(reg.test('にほんご-as1'))
console.log(reg.test('Руссkий-as1'))

/*
true
false
false
false
*/
