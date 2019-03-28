function clone(obj, isDeep) {
    let objMap = new WeakMap();

    function set(obj) {
        let val = objMap.get(obj) || 0;
        objMap.set(obj, ++val);
    }

    function deepClone(obj) {
        if (obj == null || (typeof obj === 'number' && isNaN(obj))) { // null undefined NaN
            return obj;
        }

        let ref = objMap.get(obj);
        if (ref) { // 循环引用
            return obj;
        }
        let ret;
        let type = typeof obj;
        switch (type) {
            case 'number':
                ret = obj;
                break;
            case 'boolean':
                ret = obj;
                break;
            case 'string':
                ret = obj;
                break;
            case 'function':
                ret = new Function('return ' + obj.toString() + ';');
                break;
            default:
                if (obj instanceof Array) {
                    ret = obj.map(item => deepClone(item));
                } else {
                    let className = Object.prototype.toString.call(obj).replace(/\[\w*\s\b(\w*)\]/, '$1');

                    if (className === 'Object') {

                        let keys = Object.getOwnPropertyNames(obj);
                        ret = {};
                        Object.setPrototypeOf(ret, Object.getPrototypeOf(obj));
                        keys.map(k => {
                            let desc = Object.getOwnPropertyDescriptor(obj, k);
                            if (typeof obj[k] !== 'object') {
                                Object.defineProperty(ret, k, desc);
                            } else {
                                ret[k] = deepClone(obj[k]);
                            }
                        });
                        set(ret);
                    } else {
                        // 在此遍历编码各种Class............
                        try{
                            ret = (new Function('return new ' + className + '(arguments[0]);'))(obj);
                            set(ret);
                        } catch(e){
                            ret = null
                        }
                    }
                }
        }
        return ret;
    }
    let r = isDeep ? deepClone(obj) : JSON.parse(JSON.stringify(obj));
    return r;
}

let toys = new WeakMap();
let aeroplane = {
    name: 'plane',
    superpower: 'singing songs',
    battery: 3
}
toys.set(aeroplane, 1);

let a = {
    name: 'vno',
    age: 31,
    children: [{
        name: '魏烨',
        age: 1,
        dob: new Date('2018-8-20'),
        prefix: /^\w{3,3}_\w{4,4}_\d{2,2}$/,
        talk(){
            return 'aaaaayaaaayaaa'
        },
        toys
    }],
    career: {
        title: 'Senior Software Engineer',
        years: 8,
        prec: ['Mphasis', 'JUMP System', '北京艺真国际文化投资有限公司', '柔持(北京)科技有限公司', 666]
    }
};

let b = clone(a, true);
let c = clone(a);