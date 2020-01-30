'use strict';

const Queue = require('../queue.js');

describe('Queue', () => {
    it('should add item to end of queue', () => {
        let queue = new Queue();
        queue.enqueue('Instance');
        queue.enqueue('Sally');
        queue.enqueue('Abu Aseel');
        expect(queue.front).toEqual('Instance');
        expect(queue.rear).toEqual('Abu Aseel');

    });

    it('should removed items from front of the queue', () => {
        let queue = new Queue();
        queue.enqueue('Instance');
        queue.enqueue('Sally');
        queue.enqueue('Abu Aseel');
        let item = queue.dequeue();
        expect(item).toEqual('Instance');
        expect(queue.front).toEqual('Sally');
        expect(queue.rear).toEqual('Abu Aseel');
        queue.dequeue();
        queue.dequeue();
        expect(queue.dequeue()).toBeNull();
        expect(queue.front).toBeNull();
        expect(queue.rear).toBeNull();



    })
});