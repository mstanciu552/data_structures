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
    if (tree === null) return;

    let root = tree;
    for (let i = 0; i < root.children.length; i++) {
        // arr.push(root.children[i].root);
        if (i === Math.floor((root.children.length - 1) / 2))
            arr.push(root.root);
        arr = [...arr, preOrderTraversal(root.children[i])];
    }

    return arr;
}

// l <n> r
export function inOrderTraversal(tree) {}

// l n <r>
export function postOrderTraversal(tree) {}
