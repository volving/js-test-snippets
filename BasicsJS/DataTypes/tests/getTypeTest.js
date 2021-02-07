const getType = require('../getType');

let num = 3;
let str = 'a';
let bool = true;
let nil = null;
let undef = undefined;
let symb = Symbol(num)

let obj = { num, str }
let arr = [ num, str, bool ]
let reg = /^t\.*p$/ig;
let dat = new Date('2021-1-1');



console.log('num: ', num, ' : ', getType(num));
console.log('str: ', str, ' : ', getType(str));
console.log('bool: ', bool, ' : ', getType(bool));
console.log('nil: ', nil, ' : ', getType(nil));
console.log('undef: ', undef, ' : ', getType(undef));
console.log('symb: ', symb, ' : ', getType(symb));
console.log('obj: ', obj, ' : ', getType(obj));
console.log('arr: ', arr, ' : ', getType(arr));
console.log('reg: ', reg, ' : ', getType(reg));

console.log('dat: ', dat, ' : ', getType(dat));
console.log('dat: ', dat, ' : ', getType(dat, 1));
console.log('dat: ', dat, ' : ', getType(dat, 8, 9));
