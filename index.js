const { BinaryTree } = require('./DS/binary_tree.js');

let bt = new BinaryTree(1);
bt.setLeft(2);
bt.setRight(3);

bt.left.setRight(4);
bt.right.setLeft(5);
