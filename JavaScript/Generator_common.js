class A{
    constructor(name, dob){
        this.name = name;
        this.dob = dob;
    }
}
A.prototype[Symbol.iterator] = function() {
    let keys = Object.keys(this);
    let i = 0;
    let len = keys.length;
    let key = null; 
    let z = this;
    return {
        next() {
            if(i < len) {
                key = keys[i++];
                return {done: false, value: {key, value: z[key]} };
            } else {
                return {done: true, value: undefined};
            }
        }
    }
}

let a = new A('xvno', 2020);

for(let i of a) {
    console.log(i);
}
