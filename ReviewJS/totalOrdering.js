function totalOrdering(arr) {
    let allArr = []
    function wholeArray(arr, item) {
        if(arr instanceof Array) {
            let len = arr.length
            if(len > 1) {
                for(let i = 0; i < len; i++) {
                    let arr2 = cloneArr(arr);
                    let item2 = cloneArr(item);
                    let cur = arr2.splice(i, 1)[0]
                    item2.push(cur)
                    wholeArray(arr2, item2);
                }
            } else if (len === 1) {
                let item2 = cloneArr(item)
                item2.push(arr[0])
                allArr.push(item2);
            }
        }
    }

    function cloneArr(arr){
        if(arr instanceof Array && arr.length > 0) {
            let ret = []
            for(let i = arr.length - 1; i > -1; --i) {
                ret.unshift(arr[i])
            }
            return ret;
        }
        return []
    }
    wholeArray(arr);
    return allArr
}

let a = ['a', 'b', 'c', 'd']



console.log(totalOrdering(a).length)