// Working
function search(arr, value) {
    for (let i = 0; i < arr.length; i++) 
        if (arr[i] === value)
            return i + 1;
    return -1;
}
// Working
function binary_search(arr, value) {
    let beg = 0;
    let mid = (arr.length % 2) - 1;
    let fin = arr.length;

    while (beg < fin) {
        if (value === mid) 
            return mid;
        else if(value <= mid) 
            fin = mid;
        else if (value >= mid) 
            beg = mid;
        for (let i = beg; i < fin; i++) 
            if (value === arr[i])
                return i + 1;
    }
    return -1;
}

module.exports = { search, binary_search }
