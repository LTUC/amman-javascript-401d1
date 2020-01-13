'use strict';

// The model's job is to hold the shape of the data,
// the CRUD ops around itself and it's data,
// and any specific actions/behaviors (business logic) associated with this type of thing.

class Person {

  // Define what a person looks like
  constructor(name, age, kids) {
    this.name = name;
    this.age = age;
    this.children = kids;
  }

  // CRUD Operations
  // create() technically is the constructor
  // read() technically is "this"

  // You could update the whole object, or just parts of it (see birthday)
  update() { }

  // You can delete parts of the object or the whole thing
  delete(prop) { delete this[prop]; }

  // Perform an action specific to this model type
  birthday() {
    this.age++;
  }

}

// I have all the things a person does, as well as a power
class Superhero extends Person {

  power(p) { this.power = p; }

  // If i want to do business logic, do it here
  // Anything that 'extends' from a parent class can override if it wants to
  birthday() {
    super.birthday();
    if (this.age >= 50) {
      this.delete('power');
    }
  }
}

let nancy = new Superhero('Nancy', 49, ['Jim', 'Allison']);
nancy.power('fly');
console.log(nancy);

nancy.birthday();
console.log(nancy);