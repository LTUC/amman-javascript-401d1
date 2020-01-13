# Component Based UI

## Learning Objectives

- Describe and Define
  - SASS - Nesting and Variables
  - "Component Architecture"
  - Application and Component "State"
  - Debate/Discuss Libraries vs Frameworks
  - Basics of a React App
    - index.html in public (root div)
    - index.js as bootstrapper
    - React Renders into that div
    - jsx is actually javascript but it looks like markup
    - Components can be classes or functions. What gets "returned" gets "rendered"
      - Class - `render() { return(jsx) }`
      - Function - `return(jsx)`
    - Components can load and render each other
    - Components can load their own css
- Execute
  - Begin a React project locally with `create-react-app`
  - Use codesandbox.io to work live on a React application
  - Create and render `Class` and `Functional` React components to the DOM
  - Add event listeners to React components
  - Update React component state
  - Style React applications/components using SASS

## Today's Outline

- Instructor to fill in

## Main Topic

Component based UI systems like `React`, `Angular`, `Vue` and the like all operate on similar architectural principles.

- Rather than view an application as an enormous interconnected codebase, the application is a **composition** of `components` that work together to make the application work.
- The secret sauce is how they work together.
- We use Classes and Functions to classify functionality
- We require what we need
- We render it where we want
- We pay attention to `state` and react as it changes.

#### COMPONENTS!

<img src="components.png" width="400">

#### STATE!

<img src="state.jpg" width="400">

### React

#### We will be using React in this course to learn these basic principles

As a component based system, React does an awful lot for us, principally, it gets out out of the way and makes it EASY to implement your application the way you see it, using familiar tools.

> JSX looks like markup, but it's actually Javascript. If you had to code it out, you wouldn't...

JSX

```javascript
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

Behind the scenes...

```javascript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```


