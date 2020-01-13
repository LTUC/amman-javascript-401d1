# LAB - Hooks API

Using the React "Hooks" API, refactor a functioning application, upgrading the implementation from a class-based component state driven system in a more modern functional hooks-based state system.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started
Starter code has been provided for you in the `/lab/starter-code` folder. 

Open [Code Sandbox](http://codesandbox.io) and Create a new application. When prompted, choose "From GitHub" and then paste in the URL to today's starter code folder from your fork of the class repository.

You will be submitting the URL to this working sandbox as part of your assignment.

## Assignment


### Hooks Practice

Begin with: `starter-code/practice`

To get familiar with the hooks API, you'll build a simple application that uses the state hook to manage form state, a reducer hook to manage application state, and the effect hook to handle a simple side effect.

* Convert the app component from a class into a function
* Import `useState`. `useEffect`, and `useReducer` from react
* In your `<App />` component
  * Initialize `input` and `setInput` from `useState`
  * Initialize `state` and `reducer` from `useReducer`
  * Write a reducer (outside of the function) that handles 2 actions
    * 'enter' - sets a state property called `words` to the upper-cased value of the payload
    * 'reset' - sets state back to it's initial value (empty string)
  * Use the `useEffect` hook to change `document.title` with the current value of `state.words`
  * Create a div that will show a value called `state.words`
  * Create a form with an onSubmit event pointing a local function called `_handleSubmit`
    * In this function, dispatch the `enter` action to the reducer with the payload being the value of `input`
  * Create an input field with an onChange event pointing to a local function called `_handleChange`
    * In this function, use the `setInput` method you created from `useState` to change the value of `input`
  * Create a button called "reset" that when clicked, will dispatch the 'reset' action, which should clear the output.
  
When functioning, this application should take your form field input and show it in uppercase in the `<div>` as well as in the tab title.


### To Do App: Hooks Conversion

Begin with: `starter-code/todo`

The starter code for this assignment is a "complete" To Do application that is monolithic (one enormous component) in nature and uses class components to manage state.

You will be refactoring this on 2 levels.

1. Modularize
1. Convert to functional components, with Hooks for state

**Work only in "in-memory" state at first**

* Modularize the large component into single responsibility components (i.e. List, Form, Details)
* Implement each as function components
* Use the `useState` hooks to manage component state where you would normally use state for a single component
* Use the `useReducer()` hook to manage the To Do application in the wrapper component

#### Stretch Goals

* Implement persistence with the live API to save data to the server
* Start the application with the initial list of items pulled from the server

### Testing
* Tests should assert all functionality

### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
