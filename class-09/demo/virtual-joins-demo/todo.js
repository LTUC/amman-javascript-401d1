'use strict';

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/virtuals-demo';

mongoose.connect(MONGODB_URI);

// SETUP

const todoSchema = mongoose.Schema({
  task: { type: String },
  assignee: { type: String },
  complete: { type: Boolean }
}, { toObject: { virtuals: true }, toJSON: { virtuals: true }});

const personSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String }
});

todoSchema.virtual('assigneeDetails', {
  ref: 'people',
  localField: 'assignee',
  foreignField: 'name',
  justOne: true
});

todoSchema.pre('find', join);
todoSchema.pre('findOne', join);

function join() {
  try {
    // this is where we assign a todo item to a specific person
    this.populate('assigneeDetails');
  } catch(e) {
    // if we cant, log an error
    console.error(e);
  }
}

const Todo = mongoose.model('todos', todoSchema);
const Person = mongoose.model('people', personSchema);

// USE IT
createRecords();

async function createRecords() {
  try {
    await new Person({ name: 'brian', email: 'brian@codefellows.com'}).save();
    await new Person({ name: 'jb', email: 'jb@codefellows.com'}).save();
    await new Person({ name: 'john', email: 'john@codefellows.com'}).save();
    await new Todo({ task: 'clean stuff', assignee: 'brian', complete: false }).save();
    await new Todo({ task: 'work on code', assignee: 'john', complete: false }).save();
    await new Todo({ task: 'sing', assignee: 'jb', complete: false }).save();

    let records = await Todo.find({});
    console.log('my joined records:', records);
  } catch(e) {
    console.error(e);
  }

  disconnect();
}

function disconnect() {
  mongoose.disconnect();
}
