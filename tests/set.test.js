const { Set } = require('../DS/Set');

test('Stack behaviour', () => {
  let set = new Set();
  set.push(1);
  set.push(1);
  set.push(1);
  set.push(2);
  set.push(2);
  set.push(2);
  set.push(3);
  set.push(4);
  set.push(3);
  set.push(3);
  expect(set.arr).toEqual([1, 2, 3, 4]);
  set = Set.convertToSet([1, 2, 3, 4, 1, 2, 3, 4]);
  expect(set.arr).toEqual([1, 2, 3, 4]);
  set = Set.convertToSet([2, 4, 5, 6, 1, 1, 3, 3]);
  expect(set.arr).toEqual([2, 4, 5, 6, 1, 3]);
});
