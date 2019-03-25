// @flow
// utils: start---
function getCloner(type) {
	if(type) {
		let dict = new WeakMap();
		let cnt = 0;
		return function deepClone(o) {
			if (o) {
				cnt ++;
				let ret;
				if(isObj(o)) {

					ret = dict.get(o);
					if(!ret) {
						ret = {};
						for(let key in o) {
							ret[key] = deepClone(o[key])
						}
						dict.set(o, ret);
					}
				} else if(isArray(o)){
					ret = o.map(i => {
						return deepClone(i);
					});
				} else if(isDate(o)) {
					ret = new Date(o);
				} else if(isReg(o)) {
					ret = new RegExp(o);
				} else if(typeof o === 'function') {
					ret = (new Function('return ' + o.toString()))();
				} else {
					let type = typeof o;
					if('object' !== type) {
						ret = o
					} else {
						
					}
				}
				cnt--
				if(cnt < 1) {
					dict = new WeakMap();
				}
				return ret;
			}
			return null;
		}
		function isObj(x) {
			if (typeof x === 'object' && Object.getPrototypeOf(x) === Object.prototype) {
				return true;
			}
			return false;
		}
		function isFunction(fn) {
			if (fn && fn.__proto__ === Function.prototype) {
				return true;
			} else {
				return false;
			}
		}
		function isArray(x) {
			if (x && Array.isArray(x)) {
				return true;
			}
			return false;
		}
		function isDate(x) {
			if(x && Object.getPrototypeOf(x) === Date.prototype) {
				return true;
			}
			return false;
		}
		function isReg(x) {
			if(x && Object.getPrototypeOf(x) === RegExp.prototype) {
				return true;
			}
			return false;
		}
	} else {
		return function clone(o) {
			return Object.assign({}, o);
		}
	}
}

let cloner = getCloner('deep');

let a = {
	name: 'vno',
	age: 31,
	children: [{name: '魏烨', age: 1}],
	career: {
		title: 'Senior Software Engineer',
		years: 8,
		prec: ['Mphasis', 'JUMP System', '北京艺真国际文化投资有限公司', '柔持(北京)科技有限公司']
	}
};


let b = cloner(a);

let a2 = [1,2,[3,4, [5,6, b]]];

let b2 = cloner(a2);
console.log(b2)


function inherit(proto, opts) {
	proto = cloner(proto);
	opts = cloner(opts);
	function f(){};
	f.prototype = Object.assign(proto, opts);
	return new f();
}