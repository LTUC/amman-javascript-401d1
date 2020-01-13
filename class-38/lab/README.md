# LAB - Remote APIs

Using asynchronous action creators via 'thunk', wire CRUD functionality into the To Do application, with Redux

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

Starter code has been provided for you in the `/lab/starter-code` folder. 

Open [Code Sandbox](http://codesandbox.io) and Create a new application. When prompted, choose "From GitHub" and then paste in the URL to today's starter code folder from your fork of the class repository.

You will be submitting the URL to this working sandbox as part of your assignment.

## Assignment
### To Do - With a Redux Store and Fully Connected to an API
* Upgrade the provided `todo` application 
* Keep the settings context in place so that you can manage those options within the components
* Use Redux for global state management
* For the to do form, if you're using JSON Schema Forms ...
  * Fetch the To Do schema from the server in the form component on it's initial render
  * Bonus points if you do this with `<Suspense>`
  * Convert the To Do forms to use the live schema
* For all CRUD ops, convert the native `fetch...()` calls from being in the components to instead invoking action methods
  * These should return functions that dispatch the real action
  * You'll need to have `thunk` in place to make this work
* Update the results in the store
  * **Question** -- Do you update the full store after every write operation or do you try and keep your store in sync manually?  How you approach/answer this will determine what action(s) you dispatch.

### Styling
* Clearly, this needs a little bit of TLC
* Use your generic design to apply core styling and layout
* Use your creativity ...
  * A pop-up modal for the details instead of a simple list?
  * Accordions?
  * Slide Out?
  * Rotator?

### Testing
* tests that ensure the list module functions correctly with error-check parameters

### Stretch Goals:
* Paginate the results.  The initial calls to the people list will give a total number people, pages, and a link to the next page.
* Create a new component for navigation that will use those links to draw a list of pages to fetch, and then keep re-calling that initial fetch method to update the list based on what page you are "on"
* Multi-User / Event Driven ... Once you're fully wired for CRUD, re-integrate the Q connection (the `useQ()` hook) and do event driven updates

### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
