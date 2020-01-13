# DESIGN - `<Drawer />` Component

## Assignment
Create a `<Drawer />` component, which can contain content (usually nav) and start "off screen". When activated, the drawer slides into view.

Inspiration 

* [Drawer Examples](http://mac81.github.io/pure-drawer/)
* [Creating Accordions](https://www.hongkiat.com/blog/css-only-accordion/)
* [Accordion Examples](https://1stwebdesigner.com/css-accordion-menu-methods/)
* [CSS Carousel](https://codeburst.io/how-to-pure-css-carousel-ce1a8cb231c8)    
* [Cool Carousels](https://coolcarousels.frebsite.nl/)

### Requirements
Stylize "hidden" content that is exposed when activated.

In general, components such as these should declare CSS for their states, but should not be concerned with the triggering of that state. The component that draws the drawer should send it prop functions that the drawer can call upon to close itself.

Why? The container generally is in charge of the overall animations and actions, while the child component is either visible or not. Let the parent component decide what triggers the drawer and decide how/when to close it.


#### `<Drawer />`
* The `<Drawer />` should render it's `children`
* Should start off screen
* Should have some sort of activation (prop)
* Should have a means of closing (prop)
* Accept props to declare the animation and location

#### `<Modal />`
* The `<Modal />` should render screen center (horizontally and vertically)
* Apply opacity to the content behind the modal
* Disallow screen scrolling or access to content behind the modal

#### `<Accordion />`
* The `<Accordion />` should make the titles linkable
* Only the "active" content should be visible
* Animate the switching between content sections

#### `<Rotator />`
* Left and right buttons
* Should rotate all the way around
* Provide "pips" to let the user choose a panel



### Submission Instructions
Report in canvas with a link to the PR for this branch and/or a link to your sandbox running this new feature along with all preceding design work.  You may merge it to master after your submission is turned in.
