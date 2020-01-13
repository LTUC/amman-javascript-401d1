# LAB - Context API

Create a React application that wraps the entire `<App/>` with a context provider, created using Context API. Then, create multiple components that act as consumers to your context, using it in various ways.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.


### Practice - Make a counter app with Context
You have been provided, in the `starter-code/practice` folder, a working counter application, written using standard React Component State which needs to be refactored to be Context driven, and modular.

* Create a Counter Provider Context component, which exposes the following state:
  * `count` - A number (default to 0)
  * `increment` - A reference to a function that increases the count
  * `decrement` - A reference to a function that decreases the count
* In the index.js, import CounterContext and wrap `<App />` in it, so that all child components can optionally subscribe to it as consumers.
* Your `<App />` component should simply pull in and render the following child components ...
* Create the following child components that register as a `.Consumer` to the provided context.
  * `<Counter />` - Renders the current value of `count` from the Counter Provider
    * Create this as a **class** component
    * Use the `contextType` static declaration to gain access to context.
  * `<Incrementer />` - Renders a button that, when clicked, calls the `increment()` method in the `Counter Provider`
    * Create this as a **function** component
    * Use `<CounterContext.Consumer>` as a wrapper in your `render()` method to attach to context, along with the function to pull and use context, rendering your output.
  * `<Decrementer />` - Renders a button that, when clicked, calls the `decrement()` method in the `Counter Provider`
    * Create this as a **function** component
    * Use the `useContext` hook to attach to and use context
* Provide good styling. Use the css-in-js methodology within the components themselves.

## To Do Application Refactor
You have been provided, in the `starter-code/todo` folder, a working To Do list application, written using standard React Component State

For this assignment, we'll be using the Context API to add a few "settings" to the To Do application to make it work differently based on configuration.

**Create a `context` for managing application settings**

* Number of items to display per screen (number)
* Display completed items (boolean)

**Implement Pagination**
  
* Only display the first `n` items in the list, where `n` is the number to display per screen in your context.
  * If you have more than `n` items in the list, add a button labeled `Next` that will replace the list with the next `n` items in the list.
  * If you are past the first `n` items (i.e. on page 2 or higher), add a button labeled `Previous` that will replace the list with the previous `n` items in the list.
* Filter the completed items out of the list (or not) based on the appropriate setting in context.

**Once you have the new core functionality working, make the application production ready**

* Modularize and Refactor the app using Hooks for state management
  * Reference your previous Hooks Assignments for hints
  
### Testing
* Do a deep mount of the app, and set tests to make assertions on the child components that consume context from the Provider.
  * Can they see context?
  * Can they interact via published functions?

### Stretch Goal
* Provide a "Settings" page for your users (Use Routing!)
* Allow the user to change the number change the context settings
  * Your context will need to expose methods in state...
* Save their settings in memory, and verify that the application is obeying these custom settings

### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
