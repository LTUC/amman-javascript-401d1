'use strict';

const BinaryTree = require('../index.js');
const Node = require('../node/index.js');

describe('Binary Tree', () => {
  let tree = null;

  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  it('preorder()', () => {
    let expected = [1,2,3,4,5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
    // expect(preOrder.length).toBe(5);
    // expect(typeof preOrder).toBe(Array.isArray());
  })
})