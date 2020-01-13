require('@code-fellows/supergoose');

const Food = require('../models/food-model.js');
const food = new Food();

describe('Food Model', () => {
  it('can create(() a new food', () => {
    let obj = { name: 'Corn', calories: 70, type: 'VEGETABLE' };
    return food.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a food', () => {
    let obj = { name: 'Corn', calories: 70, type: 'VEGETABLE' };
    return food.create(obj)
      .then(record => {
        return food.get(record._id)
          .then(foodItem => {
            Object.keys(obj).forEach(key => {
              expect(foodItem[key]).toEqual(obj[key]);
            });
          });
      });
  });

});
