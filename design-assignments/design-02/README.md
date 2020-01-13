# DESIGN - Navigation

## Assignment
Style navigation elements

**Inspiration**

* [100 Menus](https://www.jotform.com/blog/100-great-css-menu-tutorials/)
* [20 menu examples](https://medium.com/level-up-web/20-responsive-navigation-solutions-examples-codes-21644390afeb)

### Requirements
* Create a new mixin, under `core`, called `nav`
* Create the following navigation rules:
  * Target: `nav` in the page header (direct child of #root > header)
    * Assume `<ul>` `<li>` structure, perhaps with nesting
    * Style horizontally in the header nav
    * Positioned (by rule or by mixin) vertically top, bottom, center and horizontally left, right, center
    * Hide nested `<ul>` `<li>` trees until hover
    * If there is a 3rd or lower level, hide those as well
      * implement as a fly-out
    * Provide a minimum 44px square tap target
    * Style nicely
      * Hover States, Indicators, Animations, etc.
      * Use `_variables` and `_mixins` wherever possible to provide more means of differentiation and styling options
      * Implement responsive options
        * Hamburger/Flyout
        * Convert to drop down
  * Body Navigation
    * Target: `nav` anywhere under `<main>`
    * The use case here is navigation on the left or right side of a page, perhaps as "sub" or "section" navigation
      * Follow the same rules as for header, but with options more suited to an in-content flow layout (perhaps vertical)
      * Think of options for navigation as both a sidebar, and even within a horizontal area (like a carousel)

You can implement this using CSS-In-JS methodologies or by using context to dynamically load different SASS Partials with your theme.

## DESIGN - Lists

There are hundreds of ways to lay out and style lists, use your imagination.  More importantly, create a component/styling system that can grow over time as you develop and need more ideas and options in the future.

Inspiration: [List Examples](https://designshack.net/articles/css/5-simple-and-practical-css-list-styles-you-can-copy-and-paste/)

