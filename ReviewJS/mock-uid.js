function mockUID(len = 32) {
    let digits = [];
    for (let i = 0; i < len; i++) {
        digits[i] = Math.floor(16 * Math.random());
    }
    let ret = digits.map(i => {
        return i.toString(16);
    });
    return ret.join('').toUpperCase();
}