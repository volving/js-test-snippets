class Que {
    constructor() {
        this.s = []
    }
    enq(item) {
        this.s.push(item);
    }
    deq() {
        return this.s.shift();
    }
}


q = new Que();
q.enq(1)
q.enq(2)
q.enq(3)

console.log(q.deq())
console.log(q.deq())

qq = new Que();


console.log(q.enq === qq.enq)