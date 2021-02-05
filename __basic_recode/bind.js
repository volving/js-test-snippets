function shimmerBond() {
    Function.prototype.bond =
        Function.prototype.bond ||
        function (ctx = {}, ...args) {
            let key = 'fn_bond_' + Math.random();
            ctx[key] = this;
            return function () {
                console.log('Bond function: ', key);
                let ret = ctx[key](...args);
                delete ctx[key];
                return ret;
            };
        };
}

function unshimmerBond() {
    delete Function.prototype['bond'];
}

module.exports = {
    shimmerBond,
    unshimmerBond,
};
