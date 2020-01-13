# `<Login />` and `<Auth />`

## Learning Objectives

* Create a rules based application
* Authorize using both "Basic Authorization" and a "Bearer Token"
* Store a login token for re-use
* Hide and Show components, links, pages based on both login status and permissions

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review**
* :15 **Lightning Talk**
* Break
* :30 **CS/UI Concepts** -
* :20 **Code Review**
* Break
* :60 **Main Topic**

## UI Concept
* `<Searchbox />` component

## Main Topic:
Role based authorization

What problems do we need to solve for?
* What is the user authorized to do?
  * Which parts of our application care about this?
  * How can we determine this?
    * What's in the token?
    * Contact between the UI and the API
* How do we make this easy to use?
  * Wrapper

### Proposal
`<Auth />` component

* Based on your permissions and login status, it either gives you access to a component or jsx or hides it.
* Must not use Redux
  * Why? We don't want to force implementors into a specific state management system.

```
// The div only shows if you are logged in
  <Auth>
    <div />
  </Auth>

// The div only shows if you are logged in AND have read permissions
  <Auth capability="read">
    <div />
  </Auth>
```
