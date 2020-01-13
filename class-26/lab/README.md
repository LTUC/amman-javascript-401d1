# LAB - Component Based UI

Create and style a counter application using React components.

## Before you begin

Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

Starter code has been provided for you in the `/lab/starter-code` folder.

Open [Code Sandbox](http://codesandbox.io) and Create a new application. When prompted, choose "From GitHub" and then paste in the URL to today's starter code folder from your fork of the class repository.

You will be submitting the URL to this working sandbox as part of your assignment.

## Requirements

### Modularize and Refactor

Refactor the application given by first modularizing it, and then altering it's basic functionality of generating a random number into a proper counter application that tracks a number based on button clicks.

- Move the `Header` and `Footer` components to separate files
- Properly `export` them as defaults
- Import them into the `App` Component using ES6 `import` statement
- Rename the `Main` component to `Counter` and change the `App` component to render it using its new name
- Change the button's click handler to increment the number in state by 1 instead of returning a random number.
- Add a second button that, when clicked, would decrement that counter
- Add a form with an input field. When a valid number is entered into the field, reset the counter to the entered number

### Design Implementation

- Create a file called `app.scss` and `import` that into the `App` component
- Add some creative styling for the header, making use of SASS nesting
- Alter the `app.scss` as follows:
  - Alter your css rules to use a variable (i.e. $backgroundColor)
  - "Pin" the header and footer to the top/bottom with the main/counter section taking up all remaining space.
  - Get creative about styling the basic layout of the counter itself
    - Might things change visually when the counter is `> 0` or `< 0`?
    - Where would the buttons look best?
    - Can you make the number "pop"

### Stretch Goals

- Add and style some additional content in the header
  - A horizontal menu pinned to the right
  - A logo pinned to the left
  - Your `<h1>` aligned center between them.
- Add and style some additional content in the footer
  - 3 Columns of bullet points/text, well spaced and styled


### Assignment Submission Instructions

Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
