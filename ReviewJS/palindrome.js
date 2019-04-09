
function palindrome (str) {
    if(typeof str === 'string') {
        let len = str.length;
        str = str.split('');
        let delta = len % 2?0:1;
        let mid = parseInt(len/2);
        for(let i = 0; i < len; i ++) {
            if(str[mid - delta - i] !== str[mid + i]){
                return false
            }
        }
        return true;
    }
}
console.log(palindrome('aba'))
console.log(palindrome('abba'))
console.log(palindrome('ababa'))
console.log(palindrome('abclmmlcba'))