# LAB - Application State

For this assignment, you will be refactoring an app that uses basic state management into one that uses the more advanced Redux state management system, with a reducer.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

### Connect to a store
For this assignment, you're going to take an existing component which puts out some random numbers when a div is clicked, and refactor it to use a Redux store instead of local state.

* You've been provided starter code to work with - `app-state-connect`
* Connect `index.js` to the redux store and pass it down to the `App` component
* Remove the state declaration in the constructor
  * Do you still need a constructor?
* Bring in the actions to `app.js`
* Map state and dispatch to props in `app.js`
  * use `stuff` as your state keyword.
* Export the connected `App` component
* Render `this.props.stuff.foo` instead of `this.state.foo`
* Remove the `handleChange()` method in `app.js`
* Re-Implement the click event on the `<div>` using the action method that you mapped earlier


### Create a new reducer
In this assignment, we have a working app that uses Redux for it's state management. Now, it's time to extend it and add a new component with it's own reducer/actions. The twist is that this new reducer will also be able to respond to actions that the other component fires.

* You've been provided starter code to work with - `app-state-reducers`
* Create a new numbers reducer in the store: `numbers-reducer.js`
* Create a new numbers action in the store: `numbers-actions.js`
* Create a new action creator for the "RESET" action
* Connect to the reducer in the store's `index.js` file and export it's state as "numbers"
* The initial state should be a simple object with one key: currentNumber, set to any number you would like
* In the reducer, create a listener (in the `case`) for both the `CHANGE` and `RESET` actions
* On `CHANGE`, change the number to a random number
* On `RESET`, reset the state back to the `initialState`
* Create a new `Numbers` component that renders a `<div>` with the content "Hello"
* Import this into your `<App>` and render it below the content already being rendered
  * You should see your app's output along with "Hello" at this point
* Import your numbers actions
* Connect the Numbers component to the store and map the numbers actions and state to Props.
* Render `this.props.numbers.currentNumber`


###### Testing
* Tests are not required for this lab

###### Stretch Goals:
* Do all of this again, but from scratch
* Add a third reducer and subscribe to both bits of state
* Wire up Reducer unit tests and a fake store


### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
