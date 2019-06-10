function totalOrdering(arr) {
    function cloneArr(arr) {
        let ret = []
        if (arr instanceof Array) {
            arr.forEach(i => {
                ret.push(i);
            })
        }
        return ret;
    }
    let totalArrays = []
    function arrange(arr, segArr) {
        if(arr.length === 1) {
            segArr.push(arr[0]);
            totalArrays.push(segArr);
        } else {
            for(let i = 0, len = arr.length; i < len; i++) {
                let segArr2 = cloneArr(segArr);
                let arr2 = cloneArr(arr);
                let cur = arr2.splice(i, 1);
                segArr2.push(cur[0]);
                arrange(arr2, segArr2);
            }
        }
    }
    arrange(arr, []);
    return totalArrays;
}

let a = ['a', 'b', 'c', 'd', 'e']; // 5! = 120


let aaa = totalOrdering(a)
console.log(aaa.length, aaa)
