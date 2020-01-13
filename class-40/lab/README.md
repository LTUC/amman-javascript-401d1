# Module 8 Project: To Done

Create and Deploy the full To Do Application

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

For this assignment, you'll be running custom configured React application, where we get out from under the "Create React App" environment and into a more tactical one, using a hand crafted "webpack" ...

## Requirements

Create a fully functional To Do Application / Website with the following features:
* Minimum 3 Pages
  * Home Page describing the application
  * Login Page
  * To Do App Page
* Professional and well thought out styling
* Use the `<Login />` and `<Auth />` components to control access to the "To Do" page
  * Login Required to see anything
  * Only users with "delete" permissions can see the trash can
  * Only users with "delete" permissions can actually delete items
  * Only users with "create" permissions can add items
  * Only users with "update" permissions can toggle items as complete
* Use The Context API to set application settings/options
  * i.e. How many items to show per screen.
* All CRUD operations must be connected to a live API
  * Use your discretion on the Add Item Form
    * Hand Spun, with `useForm()` for state
    * JSON Schema Form
    * Redux Form
* Use the `useQ()` hook to subscribe to the Q server along with your API
  * Subscribe to the "create", "update", and "delete" events
  * When those events are received, dispatch the appropriate action to refresh your store.
* Clicking a To Do Item should toggle it's complete status between `true` and `false`
* Dragging a To Do Item to an on screen trash can icon should delete it
* Clicking a 'details' link for a To Do item should open up it's full details in the manner of your choosing
  * Modal Pop-Up
  * Slide-In Drawer
  * Come up with your own

## Stretch Goal

* Provide a means of updating an existing item.
* Click a link to expose a form with the item's details
* Perform a PUT on the server
* Update local state/store properly

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

You are required to deploy a locally built application, using a custom built `webpack` configuration

* Deploy your front-end (the React application) to AWS
  * Preferably, use the automated deployment process to connect a Cloud Formation stack
* Deploy your back-end (the API server) to Heroku with a mongo database
* Complete the README.md with complete documentation, UML, and user notes.
