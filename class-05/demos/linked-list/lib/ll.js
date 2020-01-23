'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);

    // { value: 5, next: null }

    if (!this.head) {
      this.head = node;
    }
    
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node;
    return this;
  }
}

module.exports = LinkedList;