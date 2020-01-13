# Context API

## Learning Objectives

* Use the React Context API to tactically manage global state.
* Implement context in class and functional components

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## Computer Science Concept:
* General Web Security

## Main Topic:

### Context
Context provides a means of passing state down the component tree through a Provider/Consumer relationship.

At as high a level as makes sense, a "provider" can make it's state available, along with means of altering it (methods). 

```
import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      changeTitleTo: this.changeTitleTo,
      title: 'My Amazing Website',
    };
  }

  changeTitleTo = title => {
    this.setState({ title });
  };

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsProvider;

```

At the app level ...
```
<SettingsContext>
  <Content />
</SettingsContext>
``` 

At the lower levels any component can "opt-in" and become a "consumer" and receive `this.state` from context.

#### In a class style component, you can attach to context in 2 ways:
 
 Wrap your component with, and use a function to "get" the context object itself, which is `this.state` from the provider component.

```
<SettingsContext.Consumer>
  {context => {
    console.log(context);
  return (
    <div>
      <h1>{context.title}</h1>
      <button onClick={() => context.changeTitleTo('Your Website')}>
        Change Title
      </button>
    </div>
  );
  }}
</SettingsContext.Consumer>
```

Statically declare a connection to the context provider and then use `this.context` to connect to state from the context provider

```
import {SettingsContext} from '../settings/context.js';

class MyComponent extends React.Component {

  static contextType = SettingsContext;
  
  render() {
    return (
      <div>
        <h1>{this.context.title}</h1>
        <button onClick={() => this.context.changeTitleTo('Your Website')}>
          Change Title
        </button>
      </div>
    );
  )
  
}
```


In a functional component, you can use the `useContext()` hook to tap right in.

Returns and provides access to whatever your context provider exports

In this example, our context provider gives us a `title` property and a `changeTitleTo()` method that we can call. This is much easier than referencing the context variable inline as you normally would.

Note -- the context API is still critically important even with this hook available. Not every React shop is using hooks, so know both ways.

```javascript
import React from 'react';
import faker from 'faker';
import { useContext } from 'react';
import { SettingsContext } from './settings/context';

function Counter() {
  const context = useContext(SettingsContext);

  return (
    <div>
      <h2>{context.title}</h2>
      <button
        type="button"
        onClick={() => context.changeTitleTo(faker.company.companyName())}
      >
        Change Title
      </button>
    </div>
  );
}

export default Counter;

```

