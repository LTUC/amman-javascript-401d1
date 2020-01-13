# LAB: Async

The javascript V8 engine is great at doing things "asynchronously" ... as a coder, you'll need to work in this lab to step out of the iterative coding mindset and use promises and async/await to read a file, as well as to work with converting buffers into text into objects and back again.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

### Requirements

> Write a node application, called `edit-file.js` in the root of your project that will modify a file on your computer

In the `data` folder there is a file called `person.json` which is a simple JSON formatted text file representing a person. As with your previous labs, you will need to create a schema for validating this data type. The rules for each property (type and required) are up to you.

- Use the node `fs` module
- Accepts a file name as a command line parameter
- Reads in the contents of the file specified
- Convert the raw contents to a javascript object
- Alter some values in the object
  - i.e. Change the value of name, the married flag, the number of children, etc.
- Validate the object against your schema, using your validation library
  - If your change is valid, save the new object back to the file
    - Re-Open and read the file contents
    - Log the object to the console to prove that the new file contents match your changed object
  - If not, return an error to the user
  - Prove that you can handle both cases

**Software Engineering Note!**

> Working with command line arguments is an essential part of writing server side code, which often starts with options. Learn to read and use them*

### Execution notes

- Perform the above operations with standard node `fs` module callbacks
- For write operations, your modules should accept an object and convert it to a save-able buffer.
- For read operations, your modules should read in the text file and convert it's contents to an object before returning.

#### Testing

- test your modules, not your cli app!
- handle both a passing and failing schema validation in your tests
- handle file errors (i.e. file not found) in a consistent way
- Use the mocked `fs` module
- Handle async properly in your tests
  - Callbacks, async, promises all behave differently ...

### Stretch Goals

- Re-Implement (refactor) using promises
- Re-Implement (refactor)  using async/await
- Rather than use the built-in `JSON.parse()` and `JSON.stringify()` methods ...
  - Write your own `stringify()` method that will turn any Object into a valid JSON string
  - Write your own `parse()` method that will turn a string of JSON into a real object

## Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations
