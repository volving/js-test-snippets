let reg = /^(?:\w{2,}):\/{2,3}(?:(?:\w*)\.)*(\w+)\.(?:\w+)((?:\/\w+)*)(?:\?([a-zA-Z0-9=&]+))?(?:#(\w+))?/i
//let u1 = 'http://asdfasf.dwww.google.com/';
let u2 = 'http://blog.vno.io/id/1234?who=4321&reptr=1111#tag'
let isValid = reg.test(u2)
let result = reg.exec(u2)

console.log(isValid)
console.log(result)