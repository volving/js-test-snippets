// u 修饰符
var s = '𠮷';

/^.$/.test(s) // false
/^.$/u.test(s) // true
