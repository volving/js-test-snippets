module.exports = {
    getType: function getType(obj) {
        let type = Object.prototype.toString.call(obj);
        return type.substring(8, type.length - 1).toLowerCase();
    },
};
