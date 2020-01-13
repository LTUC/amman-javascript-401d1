# LAB - Routing and Component Composition

Implement routing and composed components into the To Do Application.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

## Requirements

**For Each of these tasks, implement a router into the application.**

* Wrap your `<App />` component in `<BrowserRouter />` context at the index level
* Implement a simple navigation bar that links to Home and Code
* `/` should render your app/assignment or primary output
* `/about` should render a static "About Us" page of content


## Practice Component Composition
### Cards and Decks
Begin with: `starter-code/practice`

You are starting with a monolithic application that reads in a `.json` file containing an array of content sections (decks), each of which contains multiple content records (cards)

The application renders this content by mapping over the content such that each deck is a `<section>` and then each card within is a `<div>`

Refactor this application as follows

* Create separate components for `<Page />`, `<Deck />` and `<Card />`
* Render the page by sending it the content object as a property
* Have the page render a `<Deck />` for each content section.
* Have the `<Deck />` render each of their content records as a `<Card />`
* Use component composition to pre-render the cards and have the decks render them as `props.children` 
* Use the `<If />` component library to conditionally render the content in both the decks and cards
  * e.g. only render the `<header>` if you have a title.

### Testing
* Complete basic render testing on these components
* Account for missing/incomplete content

## To Do Application Refactor

Begin with: `starter-code/todo`

Again, your starter code for this assignment is a bare-bones HTML, CSS, Vanilla JS to do application.

You will first need to convert this application to React and then **add the following features**, using composition and conditional rendering.

* Change the "Add" form to use more fields and store this with each record
  * Assigned To (a name)
  * Difficulty (range from 1-5)
  * Due Date (use a calendar)
* Populate the initial To Do list from an API server
* Add a `Details` button next to the `Delete` button
  * When clicked, show a modal or slide-in with the details of the item
  
Style the application as you please. Be creative!
  
### Testing
* Complete basic render testing on the application
* Test state changes 
* Modal visibility on state change 
  * Is it rendered?
  * Is the correct to do item in it?
 
### To Do App Stretch Goals
* Save the server (`post`) when an item is added
* Delete from the server when the `Delete` button is clicked

### Additional Stretch Goals
* Create an `npm` account and an organization
* Write tests for an publish your `<If />` components to `npm`
* Now, you can use them in any project.

### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations


