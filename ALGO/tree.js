import BinaryTree from '../DS/binary_tree.js';

export function convertSortedArrayToTree(arr) {
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

// <l> n r
export function preOrderTraversal(tree) {
    let arr = [];
    if (!tree) return [];

    arr.push(tree.val);
    arr = arr.concat(preOrderTraversal(tree.left));
    arr = arr.concat(preOrderTraversal(tree.right));

    return arr;
}

// l <n> r
export function inOrderTraversal(tree) {
    let arr = [];
    if (!tree) return [];

    arr = arr.concat(preOrderTraversal(tree.left));
    arr.push(tree.val);
    arr = arr.concat(preOrderTraversal(tree.right));

    return arr;
}

// l n <r>
export function postOrderTraversal(tree) {
    let arr = [];
    if (!tree) return [];

    arr = arr.concat(preOrderTraversal(tree.left));
    arr = arr.concat(preOrderTraversal(tree.right));
    arr.push(tree.val);

    return arr;
}
