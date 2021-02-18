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

  // Tree schema testing
  expect(tree.makeSchema().length).toBe(tree.getLength());
  expect(tree.makeSchema()[0]).toBe([tree.root]);
  expect(tree.makeSchema()[1]).toBe([tree.getChildrenValues()]);
  //   expect(tree.makeSchema()[2]).toBe([tree.root]);
});
