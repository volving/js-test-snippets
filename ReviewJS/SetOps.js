function cloneSet(set0) {
    let ret = new Set();
    set0.forEach(i => {
        ret.add(i);
    })
    return ret;
}
function getUnion(set1, set2) {
    let ret = cloneSet(set1);
    set2.forEach(i => {
        ret.add(i);
    });
    return ret;
}

function getDiff (set1, set2) {
    let ret = cloneSet(set1);
    set2.forEach(i => {
        ret.delete(i);
    });
    return ret;
}
function getSymDiff(set1, set2) {
    let diff1 = getDiff(set1, set2);
    let diff2 = getDiff(set2, set1);
    return getUnion(diff1, diff2);
}

function getIts (set1, set2) {
    let ret = cloneSet(set1);
    set2.forEach(i => {
        if(set1.has(i)) {
            ret.add(i);
        }
    });
    return ret;
}


let a = new Set([1,2,3,4,5,6]);
let b = new Set([4,5,6,7,8,9]);

console.log('getUnion: ', getUnion(a,b));
console.log('getDiff: ', getDiff(a,b));
console.log('getDiff: ', getDiff(b,a));
console.log('getSymDiff: ', getSymDiff(a, b));
console.log('getIts: ', getIts(a,b));