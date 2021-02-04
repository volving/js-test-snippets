function selectSort(data) {
    let len = data.length;
    if (len > 1) {
        for (let i = 0; i < len; i++){
            let idx = i;
            let minIdx = getIdxOfMin(idx, len);
            if (idx !== minIdx) {
                swap(idx, minIdx);
            }
        }
    }
    function getIdxOfMin(from, to){
        let minIdx = from;
        for (let i = from; i <= to; i++) {
            if (data[minIdx] > data[i]) {
                minIdx = i;
            }
        }
        return minIdx;
    }
    function swap (a, b) {
        let tmp = data[a];
        data[a] = data[b];
        data[b] = tmp;
    }
}



a += b;
b = a - b;
a = a - b;
