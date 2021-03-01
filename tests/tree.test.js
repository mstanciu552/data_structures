const { BinaryTree } = require('../DS/binary_tree');
const { Tree } = require('../DS/tree');

test('Tree behaviour', () => {
  let tree = new Tree(1);

  expect(tree.getChildren().length).toBe(0);
  expect(tree.getRoot()).toBe(1);

  expect(tree.getLength()).toBe(1);

  tree.addChild(2);
  tree.addChild(3);
  tree.addChild(4);

  expect(tree.getChildren().length).toBe(3);
  expect(tree.getChildrenValues().length).toBe(3);
  expect(tree.getChildren()[0].parent.root).toBe(1);

  expect(tree.getLength()).toBe(2);

  tree.getChildren()[0].addChild(5);
  tree.getChildren()[0].addChild(6);

  tree.getChildren()[1].addChild(7);
  tree.getChildren()[1].addChild(8);

  tree.getChildren()[2].addChild(9);
  tree.getChildren()[2].addChild(10);

  expect(tree.getChildren()[0].getChildren().length).toBe(2);
  expect(tree.getChildren()[1].getChildren().length).toBe(2);
  expect(tree.getChildren()[2].getChildren().length).toBe(2);
  expect(tree.getChildren()[0].getChildren()[0].parent.root).toBe(2);

  expect(tree.getLength()).toBe(3);

  // Tree structure testing
  expect(tree.structure[tree.root].length).toBe(3);
});

test('Binary Tree behaviour', () => {
  let bt = new BinaryTree(1);

  expect(bt.left).toEqual(null);
  expect(bt.right).toEqual(null);

  bt.setLeft(2);
  bt.setRight(3);

  expect(bt.left.val).toEqual(2);
  expect(bt.right.val).toEqual(3);

  bt.left.setLeft(4);
  bt.left.setRight(5);
  bt.right.setLeft(6);
  bt.right.setRight(7);

  expect(bt.left.left.val).toEqual(4);
  expect(bt.left.right.val).toEqual(5);
  expect(bt.right.left.val).toEqual(6);
  expect(bt.right.right.val).toEqual(7);

  expect(bt.getArray()).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
