function getMaxFromArray(arr) {
    /* 功能实现 */
    if (arr && arr instanceof Array && arr.length > 0) {
        return Math.max(...arr); // ES6
        /*
        return arr.reduce((max, cur) => {
            return cur > max ? cur : max;
        }, arr[0])
        */
        /*
        let max = arr[0]
        for(let i = 1, len = arr.length; i < len; i++) {
            if(arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
         */
    }
    return new TypeError('Invalid parameter');
}
console.log(getMaxFromArray([33, 1, 5, 34, 9, 2, 7]))