const { search, binary_search } = require('../ALGO/search_algo.js');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Linear search testing
test('search an array liniarily', () => {
    expect(search(arr, 1)).toBe(1);
    expect(search(arr, 2)).toBe(2);
    expect(search(arr, 3)).toBe(3);
    expect(search(arr, 4)).toBe(4);
    expect(search(arr, 5)).toBe(5);
    expect(search(arr, 6)).toBe(6);
    expect(search(arr, 7)).toBe(7);
    expect(search(arr, 8)).toBe(8);
    expect(search(arr, 9)).toBe(9);
    expect(search(arr, 10)).toBe(10);
});

// Binary search testing
test('search an array binary', () => {
    expect(binary_search(arr, 1)).toBe(1);
    expect(binary_search(arr, 2)).toBe(2);
    expect(binary_search(arr, 3)).toBe(3);
    expect(binary_search(arr, 4)).toBe(4);
    expect(binary_search(arr, 5)).toBe(5);
    expect(binary_search(arr, 6)).toBe(6);
    expect(binary_search(arr, 7)).toBe(7);
    expect(binary_search(arr, 8)).toBe(8);
    expect(binary_search(arr, 9)).toBe(9);
    expect(binary_search(arr, 10)).toBe(10);
});
