'use strict';

const validator = require('../src/validator.js');

describe('Validator Module', () => {

  describe('allValuesNumeric()', () => {

    it(`requires an array as the primary input`, () => {
      expect(validator.allValuesNumeric('words')).toBeFalsy();
    });

    it(`disallows strings`, () => {
      expect(validator.allValuesNumeric(['words'])).toBeFalsy();
    });

    it(`disallows arrays`, () => {
      expect(validator.allValuesNumeric([[]])).toBeFalsy();
    });

    it(`disallows objects`, () => {
      expect(validator.allValuesNumeric([{}])).toBeFalsy();
    });

    it(`disallows booleans`, () => {
      expect(validator.allValuesNumeric([false])).toBeFalsy();
    });

    it(`allows numbers`, () => {
      expect(validator.allValuesNumeric([-1])).toBeTruthy();
      expect(validator.allValuesNumeric([0])).toBeTruthy();
      expect(validator.allValuesNumeric([1])).toBeTruthy();
    });

  });

  describe('hasRightMinimumArgumentCount()', () => {
    it(`counts the arguments corectly`, () => {
      expect(validator.hasRightMinimumArgumentCount([1, 2], 1)).toBeTruthy();
      expect(validator.hasRightMinimumArgumentCount([1, 2], 2)).toBeTruthy();
      expect(validator.hasRightMinimumArgumentCount([1, 2], 3)).toBeFalsy();
    });
  });

});
