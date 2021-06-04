function trimslash(str, mode) {
    let ret = str;
    if (isValidString(str)) {
        switch (mode) {
            case 'left':
                ret = str.replace(/^\/*/, '');
                break;
            case 'right':
                ret = str.replace(/\/*$/, '');
                break;
            default:
                ret = str.replace(/^\/*/, '').replace(/\/*$/, '');
        }
    }
    return ret;
}

function isValidString(str) {
    let type = getType(str);
    console.log('type: ', type);
    if (type === 'String' && str.length > 0) {
        return true;
    } else {
        return false;
    }
}

function isValidType(val, typeStr) {
    return typeStr === getType(val);
}

function getType(val) {
    let rawType = Object.prototype.toString.apply(val);
    return rawType.substring(8, rawType.length - 1);
}

module.exports = {
    trimslash,
    getType,
    isValidType,
    isValidString
};
