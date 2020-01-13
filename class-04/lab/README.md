# LAB: Data Modeling

Re-Use your validator class from Class 02 to provide sanity checking to a real data model while implementing full CRUD functionality.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.
s

## Requirements

### Categories Model

- In the starter-code folder, you'll find a memory-model interface, a category model, and a small test suite
- Using TDD ...
  - Bring in the `validate` class that you've been working on earlier in this module
    - Add support for type checking (string, number, boolean) and required fields where you feel appropriate
    - *How will this change your schemas?*
    - *How will you use this class in your CRUD methods?*
      - Make sure you don't add or update any invalid records!
      - How will you write tests for this?
  - Add tests to support the other CRUD Methods
    - `delete()`
    - `update()`

> At this point, you should have a completely working data model that extends from a parent, validates based on a schema and which has a full suite of tests for CRUD operations. This is the beginnings of a highly scalable system!

### Prove it! Create another model (Products)

- Create a data model called **products**
- Declare a schema with the following fields
  - category_id - string, required
  - price - number, required
  - weight - number
  - quantity_in_stock - number, required
- Get this working the same as categories, extending from the `memory-data-model`

### Persistence

Thus far, you've created a simple, testable, extensible data modeling system.  But the data goes away after each run of the program. For the **Products model only**, you'll be writing a persistence layer.

- Create a new model type in the `models` folder called `file-data-model.js`
  - *Hint: It's not a bad idea to copy the memory model to get started*
- Have your products model extend this new class instead
- Rather than use an in-memory database, which is the array of records, have this model store the data in the file system
  - Create a `data` folder
  - When working with a model, store it's data in a file with the model name (i.e. `categories.db`)
  - All CRUD operations should read from and write to that data file using the node `fs` module
- Write a full test suite
  - Yes ... you can use your memory model tests for inspiration
  - What needs to change in your tests for a data model that uses the file system to save data?
    - Hint: It rhymes with "sock"

### Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations
