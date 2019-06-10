let data = {
    a: 'aaa'
};
Object.defineProperty(data, 'b', {
    value: 'bbb',
    enumerable: false,
    configurable: true,
    writable: true
});
Object.defineProperty(data, 'c', {
    enumerable: true,
    configurable: true,
    get () {
        return 'ccc';
    },
    set (val) {
        throw new Error('Cannot set value to an unwritable property!');
    }
});
Object.defineProperty(data, 'd', {
    enumerable: false,
    configurable: true,
    get () {
        return 'ddd';
    },
    set (val) {
        throw new Error('Cannot set value to an unwritable property!');
    }
});
Object.defineProperty(data, Symbol('e'), {
    value: 'eee',
    enumerable: true,
    configurable: true,
    writable: true
});

Object.defineProperty(data, Symbol('f'), {
    value: 'fff',
    enumerable: false,
    configurable: true,
    writable: true
});
Object.defineProperty(data, Symbol('g'), {
    enumerable: false,
    configurable: true,
    get () {
        return 'ggg';
    },
    set (val) {
        throw new Error('Cannot set value to an unwritable property!');
    }
});

let proto = {
    x: 'xxx'
};
Object.defineProperty(proto, 'y', {
    value: 'yyy',
    enumerable: true,
    configurable: true,
    writable: true
});
Object.defineProperty(proto, 'z', {
    value: 'zzz',
    enumerable: false,
    configurable: true,
    writable: true
});
Object.defineProperty(proto, 'v', {
    enumerable: true,
    configurable: true,
    get () {
        return 'vvv';
    },
    set (val) {
        throw new Error('Cannot set value to an unwritable property!');
    }
});
Object.defineProperty(proto, 'w', {
    enumerable: false,
    configurable: true,
    get () {
        return 'www';
    },
    set (val) {
        throw new Error('Cannot set value to an unwritable property!');
    }
});
Object.setPrototypeOf(data, proto);

console.log('Object.keys(): ', Object.keys(data));

let descData = Object.getOwnPropertyDescriptors(data);
let hiddenKeys = []
for (k in descData) {
    let v = descData[k];
    if(!v.enumerable) { //  && 'value' in v
        hiddenKeys.push(k);
    }
}
console.log('hidden keys: ', hiddenKeys); 
/*
.filter(desc=>{
    console.log(desc)
    return !desc.enumerable && (value in desc)
})
*/
console.log('Object.getOwnPropertyNames(): ', Object.getOwnPropertyNames(data));
console.log('Object.getOwnPropertySymbols(): ', Object.getOwnPropertySymbols(data));
console.log('Reflect.ownKeys(): ', Reflect.ownKeys(data));

let keys = [];
for(let k in data) {
    keys.push(k);
}
console.log('for(...in...) ', keys);