module.exports = snakeToCamel(str) {
    if (str && typeof str === 'string' && str.length > 0) {
        str = str.replace(/_+(\w)/ig, function () {
            console.log(arguments);
        })
    }
    return str;
}