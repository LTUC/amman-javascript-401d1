# LAB: Node Ecosystem

Time to get hands on with Test Driven Development (TDD) and Continuous Integration (CI). For this lab, you will be writing a fully tested validation module and shepherd it through a CI pipeline.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

### Getting Started

In the `starter_code` folder, there is a partial implementation of a "validator" module

In the `root` of that folder, you'll find a file called `index.js` that wires in the validator module and attempts to run functions imported from it.

In the `__tests__` folder, you'll find a file called `validator.test.js` that wires in the validator module, sets up some testing (optimistically) but contains no test code

## Requirements

### Developer Implementation

> **USE TDD Practices**

Write an object validation module that exports a "validate" method which can, based on the inputs, validate whether or not the data contained within an object meets a set of rules.

Things we want to be able to validate

- Is the object we're trying to validate actually an object?
- All all "required" properties present and do they have values?
- For any property that specifies a type, does the value match that type?

#### Examples

Consider this set of rules, which describe what a valid person object should look like

```javascript
const personRules = {
  fields: {
    id: {type: 'string', required: true},
    name: {type: 'string', required: true},
    age: {type: 'number', required: true},
    children: { type: 'array', valueType: 'string' },
  },
};
```

Given those rules, this person should be validated as `true`

```javascript
const susan = {
  id:'123-45-6789',
  name:'Susan McDeveloperson',
  age: 37,
  children:[],
};
```

This one, as `false`

```javascript
const fred = {
  id:38,
  name:'Freddy McCoder',
  children:[],
};
```

#### Testing

Write a set of tests for your *Validation Module*

- Test each method for proper/improper use (required params)
- Validate that validation is reliable
- Validate proper error conditions/returns

> **Software Engineering Note!**
> Externalizing type checking and argument validation is a good exercise in refactoring code

---

### End User Implementation

- Using your well tested library, write a small app that uses your validation scheme
  - Use the `index.js` file provided to validate objects (such as the above examples) using the exported functions from your library
- `console.log()` the return values

### Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations
