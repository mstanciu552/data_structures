const { BinaryTree } = require('../DS/binary_tree');

function convertSortedArrayToTree(arr) {
  return (function helper(nums = arr, start = 0, end = nums.length - 1) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);
    let root = new BinaryTree(nums[mid]);
    if (start === end) return root;

    root.left = helper(nums, start, mid - 1);
    root.right = helper(nums, mid + 1, end);

    return root;
  })();
}

module.exports = { convertSortedArrayToTree };
