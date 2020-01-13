// The same test suite should run unchanged with both versions of the model!

const Food = require('../models/food.monolithic.js');
// const Food = require('../models/food.modular.js');

describe('Food Model (Modular)', () => {

  let food;

  beforeEach(() => {
    food = new Food();
  });

  // How might we repeat this to check on types?
  it('sanitize() returns undefined with missing requirements', () => {
    var testRecord = {};
    expect(food.sanitize(testRecord)).toBeFalsy();
  });

  it('can post() a new food', () => {
    let obj = { name: 'Test Food', calories: 2 };
    return food.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a food', () => {
    let obj = { name: 'Test Food', calories: 2 };
    return food.create(obj)
      .then(record => {
        return food.get(record._id)
          .then(food => {
            Object.keys(obj).forEach(key => {
              expect(food[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});