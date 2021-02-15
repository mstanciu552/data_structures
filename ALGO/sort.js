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

function insertion_sort(arr, dir = "asc") {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    if (dir === "asc")
      while (j >= 0 && key < arr[j]) {
        arr[j + 1] = arr[j];
        j -= 1;
      }
    else if (dir === "desc")
      while (j >= 0 && key > arr[j]) {
        arr[j + 1] = arr[j];
        j -= 1;
      }
    arr[j + 1] = key;
  }

  return arr;
}

function merge_sort(arr, dir = "asc") {
  if (arr.length <= 1) return arr;

  let mid = arr.length / 2;

  let front = [...arr.slice(0, mid)];
  let back = [...arr.slice(mid)];

  merge_sort(front);
  merge_sort(back);

  let i = 0,
    j = 0,
    k = 0;

  // Merge the two arrays in order
  while (i < front.length && j < back.length) {
    if (front[i] < back[j]) {
      arr[k] = front[i];
      i++;
    } else {
      arr[k] = back[j];
      j++;
    }
    k++;
  }

  while (i < front.length) {
    arr[k] = front[i];
    i++;
    k++;
  }
  while (j < back.length) {
    arr[k] = back[j];
    j++;
    k++;
  }

  return dir === "asc" ? arr : arr.reverse();
}

function selection_sort(arr, dir = "asc") {
  for (let i = 0; i < arr.length - 1; i++) {
    let index = 0;
    let min = Math.max(...arr);
    let max = Math.min(...arr);
    // Finding the minimum or maximum
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

function quick_sort(arr, low, high, dir = "asc") {
  function partition(arr, l, h) {
    let pivot = arr[h];
    let i = l - 1;
    for (let j = low; j < high; j++)
      if (arr[j] < pivot) {
        i++;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
  }

  if (low < high) {
    let pi = partition(arr, low, high);

    quick_sort(arr, low, pi - 1);
    quick_sort(arr, pi + 1, high);
  }
  return dir === "asc" ? arr : arr.reverse();
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
  quick_sort,
};
