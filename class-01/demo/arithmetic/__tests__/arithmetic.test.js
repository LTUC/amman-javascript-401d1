'use strict';

const arithmetic = require('../src/arithmetic.js');

describe('Arithmetic Module', () => {

  describe('parameter validation ... ', () => {

    // Do all of the add() checks ...
    it(`add() disallows strings`, () => {
      expect(arithmetic.add('foo', 4)).toBeNull();
    });

    it(`add() disallows arrays`, () => {
      expect(arithmetic.add([], 4)).toBeNull();
    });

    it(`add() disallows objects`, () => {
      expect(arithmetic.add({}, 4)).toBeNull();
    });

    it(`add() disallows booleans`, () => {
      expect(arithmetic.add(true, 4)).toBeNull();
    });

    it(`add() requires at least 2 args`, () => {
      expect(arithmetic.add(4)).toBeNull();
    });

    // Or ... if you want to save the trouble of repeating yourself loop over the methods and do common things
    let methods = ['add','subtract','multiply','divide'];
    methods.forEach(method => {

      it(`${method} disallows strings`, () => {
        expect(arithmetic[method]('foo', 4)).toBeNull();
      });

      it(`${method} disallows arrays`, () => {
        expect(arithmetic[method]([], 4)).toBeNull();
      });

      it(`${method} disallows objects`, () => {
        expect(arithmetic[method]({}, 4)).toBeNull();
      });

      it(`${method} disallows booleans`, () => {
        expect(arithmetic[method](true, 4)).toBeNull();
      });

      it(`${method} requires at least 2 args`, () => {
        expect(arithmetic[method](4)).toBeNull();
      });

    });

  });

  describe('add()', () => {

    it('can add', () => {
      let a = 1;
      let b = 2;
      expect(arithmetic.add(a,b)).toEqual(a+b);
    });

  });

  describe('subtract()', () => {

    it('can subtract', () => {
      expect(arithmetic.subtract(3,1)).toEqual(2);
      expect(arithmetic.subtract(1,4)).toEqual(-3);
      expect(arithmetic.subtract(-3,-3)).toEqual(0);
    });

  });

  describe('multiply()', () => {

    it('can multiply', () => {
      expect(arithmetic.multiply(3,1)).toEqual(3);
      expect(arithmetic.multiply(2,3,4)).toEqual(24);
      expect(arithmetic.multiply(-3,-3)).toEqual(9);
    });

  });

  describe('divide()', () => {

    it('can divide', () => {
      expect(arithmetic.divide(6,2)).toEqual(3);
      expect(arithmetic.divide(24,6,2)).toEqual(2);
      expect(arithmetic.divide(3,0)).toEqual(null);
    });

  });

});
