# 401 Advanced Javascript - Design Assignments

At the end of each module, in addition to a new data structure, students will be presented with a new UI concept and design assignment, which will be due prior to the end of the next module.

The intent is that by the end of the course, students will have a complete "scalable" design that can be used as a solid starting point for any web project, as well as a stable of React components that can both integrate into the overall design, or stand alone.

*Think [Material Design](https://material-ui.com) vs [Bootstrap](https://getbootstrap.com/docs/3.3/css/)*

To implement, students may work locally on their machine using the included `design-challenge-app.zip` or Fork the [starter sandbox](https://codesandbox.io/s/4xv7wyp607) and connect it to your github account.

 In either case, creating a new repository called `design`, where you will be working on your design as you build it throughout the course of each daily design exercise.

The design repo must be deployed for review and grading. If working at Code Sandbox, then a simple link to the sandbox will suffice. If working in a local environment through git, then the submission must include both a PR to the repository and a link to a deployed application at Netlify or some other service.

Each design assignment includes a mock-up to match against and a pre-built component and markup which can be styled using either component CSS or an extension to the master "design", at the student's discretion.

Most of the design assignments come with some sort of "Inspiration" or collection visual examples to serve as either instructional materials or examples of what can be done. We encourage you to dive in and see how things work, read about why certain things are considered to be better practice than others, and generally look at approaches.  DO NO plagiarize. Be inspired. Look, learn, tinker. And then be a developer and create this design your own way. If you do lean heavily on one approach (even just philosophically), provide a link back or a shout out to the originator.

## Wireframe / Mockup / Design Target

## Design/Component Progression:

### Module 1 - [Scaffold, Variables, Mixins, Modules](./design-01/)
* Setup a basic SASS design folder structure and compiler
* design.scss
* Create variables for simple alter-ables
* Create mixins for re-usable/variable elements
* Break out the previous steps into separate _files and Create a design  root that imports them.
* Basic Site Scaffold: Header, Main, Footer
* Basic Site Elements: Font Ramp, Buttons, Links

### Module 2 - [Navigation and Lists](./design-02/)
* Horizontal, Hamburger, Vertical Menus
* Lists

### Module 3 - [Forms](./design-03/)
* Fieldsets, Labels, Placeholders
* Inputs, Textareas
* Selects, Radios, Checkboxes

### Module 4 - [Tables](./design-04/)
* HTML Tables
* Div Driven Tables
* Sorting, Filtering
* Responsive Tables

### Module 6 - [Hidden Content](./design-05/)
* Modal
* Drawers
* Sliders
* Carousels

### Module 7 - [Grid Systems and Layouts](./design-06/)
* Implement an old-school GRID layout system
* Using Float, Flex, CSS Grid

### Module 8 - [Cards and Decks](./design-07/)
* Design 4 ways to layout card contend
* Design a system for laying out cards within decks
* Basic 1,2,3 layouts
* Highlight Center
* Accordion, Tab


## Design Topology

```
    /design
        /lib
            /_variables.scss
            /_mixins.scss
            /_reset.scss
        /core
            /_header.scss
            /_footer.scss
            /_base.scss
        /design.scss

```


