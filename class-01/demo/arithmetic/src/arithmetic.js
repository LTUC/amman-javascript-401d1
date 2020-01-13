'use strict';

const validate = require('./validator.js');

/**
 * Runs a bunch of math functions
 * @module arithmetic
 */

let arithmetic = module.exports = {};

/**
 * Add function: takes a list of numbers and returns the sum. Will return null any non-numeric values are sent
 * @param numbers
 * @returns {number}
 */
arithmetic.add = function (...numbers) {
  if (validate.allValuesNumeric(numbers) && validate.hasRightMinimumArgumentCount(numbers, 2)) {
    return numbers.reduce((result, n) => { return result + n; }, 0);
  }
  else { return null; }
};

arithmetic.subtract = function (...numbers) {
  if (validate.allValuesNumeric(numbers) && validate.hasRightMinimumArgumentCount(numbers, 2)) {
    return numbers.reduce((result, n) => { return result && result - n; });
  }
  else { return null; }
};

arithmetic.multiply = function (...numbers) {
  if (validate.allValuesNumeric(numbers) && validate.hasRightMinimumArgumentCount(numbers, 2)) {
    return numbers.reduce((result, n) => { return result * n; }, 1);
  }
  else { return null; }
};

arithmetic.divide = function (...numbers) {

  if (validate.allValuesNumeric(numbers) &&
    validate.noValuesZero(numbers) &&
    validate.hasRightMinimumArgumentCount(numbers, 2)
  ) {
    return numbers.reduce((result, n) => { return result / n; });
  }
  else {
    return null;
  }

};