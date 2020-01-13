'use strict';

const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/class-09';
mongoose.connect(URI);

// Create 2 Schemas
const todoSchema = mongoose.Schema({
  task: { type: String },
  assignee: { type: String },
  complete: { type: Boolean }
}, { toObject: { virtuals: true }, toJSON: { virtuals: true } });

todoSchema.virtual('assigneeDetails', {
  ref: 'people',
  localField: 'assignee',
  foreignField: 'name',
  justOne: true,
});

todoSchema.pre('find', join);
todoSchema.pre('findOne', join);

function join() {
  try {
    this.populate('assigneeDetails');
  }
  catch (e) { console.log('Find Error', e); }
}

const personSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
});

// In Mongoose, we need to create classes out of the schemas
const Todo = mongoose.model('todos', todoSchema);
const Person = mongoose.model('people', personSchema);

// --------------------------------------------

createRecords();

// Now, create an instance of a user and save it.

async function createRecords() {

  try {
    await new Person({ name: "john", email: "john@here.com" }).save();
    await new Person({ name: "cathy", email: "cathy@here.com" }).save();
    await new Todo({ task: "Clean Floor", assignee: "john", complete: false }).save();
    await new Todo({ task: "Shop", assignee: "john", complete: false }).save();
    await new Todo({ task: "Gas up the car", assignee: "cathy", complete: false }).save();
    let last = await new Todo({ task: "Study", assignee: "cathy", complete: false }).save();

    let records = await Todo.find({});
    console.log(records);

  } catch (e) { console.error(e); }

  disconnect();

}

function disconnect() {
  mongoose.disconnect();
}