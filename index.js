const { Tree } = require('./DS/tree.js');

let tree = new Tree(1);

tree.addChild(2);
tree.addChild(3);
tree.addChild(4);

tree.getChildren()[0].addChild(5);
tree.getChildren()[0].addChild(6);

tree.getChildren()[1].addChild(7);
tree.getChildren()[1].addChild(8);

tree.getChildren()[2].addChild(9);
tree.getChildren()[2].addChild(10);

console.log(tree.getStructAsValues());
