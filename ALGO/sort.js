function swap(a, b) {
    let temp = a;
    a = b;
    b = temp;
}

function bubble_sort(arr, dir = "asc") {
    for (let i = 0; i < arr.length - 1; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (dir === "asc")
                if (arr[i] <= arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                } else if (arr[i] >= arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
    return arr;
}

function insertion_sort(arr) {
    return arr;
}

function quick_sort(arr) {
    return arr;
}

function selection_sort(arr, dir = "asc") {
    for (let i = 0; i < arr.length - 1; i++) {
        let index = 0;
        let min = Math.max(...arr);
        let max = Math.min(...arr);
        // Finding the minimum
        for (let j = i; j < arr.length; j++)
            if (dir === "asc") {
                if (min > arr[j]) {
                    min = arr[j];
                    index = j;
                }
            } else if (max < arr[j]) {
                max = arr[j];
                index = j;
            }
        // Swapping two values
        let temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }

    return arr;
}

function merge_sort(arr) {
    return arr;
}

function heap_sort(arr) {
    return arr;
}

module.exports = {
    bubble_sort,
    selection_sort,
    merge_sort,
    heap_sort,
    insertion_sort,
};
