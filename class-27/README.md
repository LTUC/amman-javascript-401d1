# React Testing and Deployment

## Learning Objectives

* Write and Execute Snapshot tests for a React Application
* Write and Execute Enzyme (live) tests for a React Application
* Deploy a React application to AWS S3 manually
* Deploy a React application to cloudfront directly from github

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## UI Concept:
* SASS
  * @import
  * Mixins
    * @include

## Main Topics:

### AWS Deployments
* Buckets
  * Storage containers for static assets
* Cloud Front
  * The Cloud! Your stuff all over the planet, with a secure URL
* Cloud Formation and Code Deploy
  * Deployment pipleline that connects Github, Buckets and Cloud Front

### React Testing
* **Snapshots** - Make assertions on the *exact* generated markup at any state of the application.
* **Render Testing** - Similar to snapshots, but allows for jQuery-like inspection of the virtual DOM tree
* **Shallow Testing** - Executes and renders the called/container component, but does not compose children.
* **Mounting** - Executes the full component and children. Allows for inspection of rendered Virtual DOM as well as the current state

Using a combination of approaches, you can easily "use" your application and ensure that things are changing both visually and physically (elements and state) as you expect.

####Sample test for our counter component
```
import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../../src/components/counter/counter.js';

describe('<Counter/> (Enzyme Test)', () => {
  it('is alive at application start', () => {
    let app = mount(<Counter />);
    expect(app.find('.count').text()).toBe('0');
  });

  it('can count up', () => {
    let app = mount(<Counter />);
    app.find('.up').simulate('click');
    expect(app.state('count')).toEqual(1);
    app.find('.up').simulate('click');
    expect(app.state('count')).toEqual(2);
  });

  it('can count down', () => {
    let app = mount(<Counter />);
    app.find('.down').simulate('click');
    expect(app.state('count')).toEqual(-1);
    app.find('.down').simulate('click');
    expect(app.state('count')).toEqual(-2);
  });

  it('visually displays proper polarity and value on the count element', () => {
    let app = mount(<Counter />);
    expect(app.find('.count.negative').exists()).toBeFalsy();
    expect(app.find('.count.positive').exists()).toBeFalsy();
    // Go to 1
    app.find('.up').simulate('click');
    expect(app.find('.count.positive').exists()).toBeTruthy();
    expect(app.find('.count').text()).toBe('1');

    // Down to zero
    app.find('.down').simulate('click');
    expect(app.find('.count').text()).toBe('0');
    expect(app.find('.count.negative').exists()).toBeFalsy();
    expect(app.find('.count.positive').exists()).toBeFalsy();

    // Down to -1
    app.find('.down').simulate('click');
    expect(app.find('.count.negative').exists()).toBeTruthy();
    expect(app.find('.count').text()).toBe('-1');
  });
});

describe('<Counter/> Core Component (Snapshot Test)', () => {
  it('renders right', () => {
    const component = renderer.create(<Counter />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

