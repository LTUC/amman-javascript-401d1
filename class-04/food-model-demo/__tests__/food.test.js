'use strict';

const Food = require('../models/food.modular.js');

describe('Food Model', () => {

  let food;

  beforeEach(() => {
    food = new Food();
  });

  it('can post() a new food item', () => {
    let obj = { name: 'test item', calories: 5 };

    return food.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        })
      })
      .catch(err => console.error(err))
  })

  it('can get() a food item', () => {
    let obj = { name: 'test item 2', calories: 600 };

    return food.create(obj)
      .then(record => {
        return food.get(record.id)
          .then(food => {
            Object.keys(obj).forEach(key => {
              expect(food[0][key]).toEqual(obj[key]);
            })
          })
      })
  });
});