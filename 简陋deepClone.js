function clone(obj) {
	if (isObj(obj)) {
		let o = {}
		for(let key in obj) {
			if(isObj(obj[key])){
				o[key] = clone(obj[key])
			} else {
				o[key] = obj[key]
			}
		}
		return o
	}
	return obj
}

function isObj(o) {
	if(o && o !== null && typeof o === 'object') {
		return true
	}
	return false
}

a = {
	name: 'volving',
	surname: 'WEI',
	comp: {
		age: 13,
		dob: new Date(),
		family: {
			mom: 'Wang',
			dad: 'Wei'
		}
	},
	id: Symbol('volving wei'),
	getNames: function(){
		return this.name + this.surname
	}
}

b = clone(a)

console.log(a)
console.log(b)
console.log(a.getNames())
console.log(b.getNames())

console.log(JSON.stringify(a) === JSON.stringify(b));