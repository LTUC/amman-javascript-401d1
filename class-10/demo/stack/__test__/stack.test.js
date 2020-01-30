'use strict';

const Stack = require('../stack.js');

describe('Stack', () => {
    describe('push()', () => {
    it('should push an item', () => {
        let stack = new Stack();
        expect(stack.peek()).toBeNull();
        stack.push('Instance');
        expect(stack.peek()).toEqual('Instance');
        stack.push('Sally');
        expect(stack.peek()).toEqual('Sally');
    });
});

describe('pop()', () => {
    it('should return the top item and remove it', () => {
        let stack = new Stack();
        stack.push('Instance');
        stack.push('Sally');
        stack.push('Abu Aseel');
        let item = stack.pop();
        expect(item).toEqual('Abu Aseel');
        stack.pop();
        item = stack.pop();
        expect(item).toEqual('Instance');
        console.log(stack);
        expect(stack.peek()).toBeNull();
    });
});
    describe('peek()', ()=> {
        it('should return the top of stack', () => {
            let stack = new Stack();
            stack.push('Instance');
            expect(stack.peek()).toEqual('Instance');
        });
    });
});