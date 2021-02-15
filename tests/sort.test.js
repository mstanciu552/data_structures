const {
  bubble_sort,
  selection_sort,
  insertion_sort,
  merge_sort,
  quick_sort,
} = require('../ALGO/sort');

const arr1 = [22, 11, 45, 67, 32, 1, 5, 7, 8, 10, 3, 4, 4, 3, 22];

const sortedArray1 = arr1.sort();

let arrays = [];
let sortedArrays = [];

for (let i = 0; i < 10; i++) {
  let array = [];
  for (let j = 0; j < 10; j++) {
    array.push(Math.floor(Math.random() * 10));
  }
  arrays.push(array);
}

test('Sort behaviour', () => {
  expect(bubble_sort(arr1)).toBe(sortedArray1);
  expect(selection_sort(arr1)).toBe(sortedArray1);
  expect(insertion_sort(arr1)).toBe(sortedArray1);
  expect(merge_sort(arr1)).toBe(sortedArray1);
  expect(quick_sort(arr1)).toBe(sortedArray1);
  expect(bubble_sort(arr1, 'desc')).toBe(sortedArray1.reverse());
  expect(selection_sort(arr1, 'desc')).toBe(sortedArray1.reverse());
  expect(insertion_sort(arr1, 'desc')).toBe(sortedArray1.reverse());
  expect(merge_sort(arr1, 'desc')).toBe(sortedArray1.reverse());
  expect(quick_sort(arr1, 'desc')).toBe(sortedArray1.reverse());

  for (let i = 0; i < 10; i++) {
    let sorted = arrays[i].sort();

    expect(bubble_sort(arrays[i])).toBe(sorted);
    expect(selection_sort(arrays[i])).toBe(sorted);
    expect(insertion_sort(arrays[i])).toBe(sorted);
    expect(merge_sort(arrays[i])).toBe(sorted);
    expect(quick_sort(arrays[i])).toBe(sorted);
    expect(bubble_sort(arrays[i], 'desc')).toBe(sorted.reverse());
    expect(selection_sort(arrays[i], 'desc')).toBe(sorted.reverse());
    expect(insertion_sort(arrays[i], 'desc')).toBe(sorted.reverse());
    expect(merge_sort(arrays[i], 'desc')).toBe(sorted.reverse());
    expect(quick_sort(arrays[i], 'desc')).toBe(sorted.reverse());
  }
});
