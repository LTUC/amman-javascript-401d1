# LAB: Classes, Inheritance, Functional Programming

In this lab, you will be doing your first "refactoring", which the process of migrating working code into a new methodology or tech stack. Today, you'll migrate a standard constructor function exported from a node module into a Class, keeping the functionality (and the interface) exactly the same.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Requirements

### Part 1: Classes (Vehicles)

**Starter Code:** `starter-code/classes`

- Implement both `Car` and `Motorcycle` using a Javascript `Class` (in the `vehicle-class.js` file)
- The tests are pre-configured to run only the constructor variety, but will need to be altered to also test your `Classes`
  - Try and find a way to keep this DRY

 **Software Engineering Note!** *This is the heart of a refactor -- re-implement the same functionality, the same signature, and the same I/O while completely rewriting the underlying implementation*

### Part 2: Validator

**Starter Code:** `starter-code/validator`

This is a repeat of Lab 01, but using a class instead of module methods. This is essentially going to be a refactor. You will have a codebase from which to start, with the goal being to keep the functionality the same, while improving the implementation.

**Write an object validation module that exports a "validate" class that can, based on the inputs, validate whether or not an entity is satisfactory.**

Things we want to be able to validate

- Is the entity itself the right type (array, object, function etc)
- All all "required" properties present and do they have values?
- For any property that specifies a type, does the value match that type?
  - i.e. an array of only numbers

Question: Do you want to export the class and have to make a new instance after you import it, or do you want to export an instance of that class (we call this a singleton). What are the pros and cons to each choice?

#### Testing the Validation Module

- Test each method for proper/improper use (required params)
- Validate that validation is reliable
- Validate proper error conditions/returns

## Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations
