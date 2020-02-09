'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value; // passed in
    this.left = left; // null
    this.right = right; // null
  }
}

module.exports = Node;