'use strict';

const LL = require('../../lib/ll.js');

describe('Linked List Module', () => {

  it('constructor', () => {
    let list = new LL();
    expect(list.head).toBeNull();
  })

  it('append()', () => {
    let list = new LL();

    let initialValue = 'first item';
    list.append(initialValue);

    expect(list.head.value).toEqual(initialValue);

    let nextValue = 'second item';
    list.append(nextValue);
    expect(list.head.value).toEqual(initialValue);

    console.log('my current list', list);
  });
})