
function getType(o) {
    var type = typeof o;
    if (['boolean', 'number', 'string', 'undefined'].indexOf(type) > -1) {
        if(type === 'number' && isNaN(o)){
            return 'NaN';
        }
        return type;
    } else {
        if (null === o) {
            return 'null';
        }else if(o instanceof Array){
            return 'array';
        }else if(o instanceof Function){
            return 'function';
        }else if(o instanceof RegExp){
            return 'regexp';
        }else if(o instanceof Date){
            return 'date';
        }else{
            return 'object';
        }
    }
}

console.log(getType(3 === 3));
console.log(getType(3 === -3));
console.log(getType(9));
console.log(getType(NaN));
console.log(getType('name'));
console.log(getType(undefined));
console.log(getType({kay: 'asd'}));
console.log(getType([1, 3, 'asdf']));
console.log(getType(function() {
    console.log('functions~')
}));
console.log(getType());
console.log(getType(/asdf/i));
console.log(getType(new Date()));
console.log(getType(Date));
