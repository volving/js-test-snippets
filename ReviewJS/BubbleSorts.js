
data = [95, 10, 5, 1, 2, 3, 4, 7, 8, 9, 11, 13, 15, 18, 22, 30, 39, 44];
bubbleSort(data);


function bubbleSort(data) {
    function swap(arr, i, j) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    for (let i = data.length - 1; i > 0; i = --i) {
        for (let j = 0; j < i; j++) {
            if (data[j] > data[j + 1]) {
                swap(data, j, j + 1);
            }
        }
    }
    return data;
}

function bubbleSort(data) {
    function swap(arr, i, j) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    let flag;  // 内层循环没有交换, 说明已达到有序
    for (let i = data.length - 1; i > 0; --i) {
        flag = true;
        for (let j = 0; j < i; j++) {
            cnt++;
            if (data[j] > data[j + 1]) {
                flag = false;
                swap(data, j, j + 1);
            }
        }
        if (flag) {
            return data;
        }
    }
    return data;
}


function bubbleSort(data) {
    function swap(arr, i, j) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    
    let prePos = data.length - 1;
    for (let i = prePos; i > 0; i = prePos || i - 1) {
        prePos = false;
        for (let j = 0; j < i; j++) {
            if (data[j] > data[j + 1]) {
                prePos = j + 1
                swap(data, j, prePos);
            }
        }
    }
    return data;
}

function bubbleSort(data) {
    function swap(arr, x, y) {
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }
    let l2r = 0, r2l = data.length - 1;
    while(l2r < r2l) {
        for(let i = l2r; i < r2l; i ++){
            if(data[i] > data[i+1]) {
                swap(data, i, i + 1);
            }
        }
        r2l--;
        
        for(let j = r2l; j > l2r; j--) {
            if(data[j-1] > data[j]) {
                swap(data, j, j - 1);
            }
        }
        l2r++;
    }
    return data;
}

function bubbleSort(data) {
    function swap(arr, i, j) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    let prePos = data.length - 1;
    let flag;
    for (let i = prePos; i > 0; i = prePos || i - 1) {
        flag = true;
        prePos = false;
        for (let j = 0; j < i; j++) {
            if (data[j] > data[j + 1]) {
                flag = false;
                prePos = j + 1
                swap(data, j, prePos);
            }
        }
        if (flag) {
            return data;
        }
    }
    return data;
}


function bubbleSort(data) {
    function swap(arr, x, y) {
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }
    let l2r = 0, r2l = data.length - 1;
    let cnt = 0;
    let swapcnt = 0;
    let flat = true;
    while (l2r < r2l) {
        for (let i = l2r; i < r2l; i++) {
            cnt++;
            if (data[i] > data[i + 1]) {
                swapcnt++
                swap(data, i, i + 1);
                flag = false;
            }
        }
        r2l--;

        for (let j = r2l; j > l2r; j--) {
            cnt++;
            if (data[j - 1] > data[j]) {
                swapcnt++
                swap(data, j, j - 1);
                flag = false;
            }
        }
        l2r++;
        if (flag) {
            break;
        }
        flag = true;
    }
    console.log(cnt, swapcnt, data);
    return data;
}


function bubbleSort(data) {
    function swap(arr, x, y) {
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }
    let l2r = 0, r2l = data.length - 1;
    let flag;
    let l2rPos = false, r2lPos = false;
    while(l2r < r2l) {
        flag = true;
        for(let i = l2r; i < r2l; i ++){
            cnt ++;
            if(data[i] > data[i+1]) {
                flag = false;
                swapcnt ++;
                swap(data, i, i + 1);
                l2rPos = i + 1
            }
        }
        
        r2l = l2rPos || r2l - 1;
        l2rPos = false;
        
        for(let j = r2l - 1; j > l2r; j--) {
            cnt ++;
            if(data[j-1] > data[j]) {
                swapcnt ++;
                swap(data, j, j - 1);
                r2lPos = j - 1
            }
        }
        l2r = r2lPos || l2r + 1;
        rl2Pos = false;
        
    }
    console.log(cnt, swapcnt, data)
    return data;
}
