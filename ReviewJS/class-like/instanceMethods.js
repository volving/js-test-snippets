class B {
    constructor(val) {
        this.val = val;
        this.val2 = this.clone(this.val);
    }
    show() {
        console.log(this.val2);
    }
}

B.prototype.clone = function (val) {
    switch (typeof val) {
        case 'object':
            return JSON.parse(JSON.stringify(val));
        default:
            return val;
    }
}




class A {
    constructor(val) {
        this.val = val;
        this.val2 = this.clone(this.val);
    }
    show() {
        console.log(this.val2);
    }
    clone(val) {
        switch (typeof val) {
            case 'object':
                return JSON.parse(JSON.stringify(val));
            default:
                return val;
        }
    }
}






