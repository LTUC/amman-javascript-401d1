# DESIGN - HTML Tables

## Assignment
HTML tables are commonly used for displaying tabular data. They are challenging to design well as users tend to have a hard time focusing in large grids.

Inspiration: [25 Table Design Ideas](https://freshdesignweb.com/free-css-tables/)


### Requirements
* Style the `<thead>`, `<tbody>`, `<th>`, `<td>`, `<tfoot>` present markup
* Tinker with dynamism: adding rows dynamically, filtering, etc.
* Style the table in your design
* Provide SASS Classes or Mixins to handle some of the following concepts
  * Scrolling the body (to save visible vertical space)
  * Zebra striping either the rows or the columns
  * Better header/footer differentiation
  * Hover states and zooming
  * Printing
  * Column, Row, Cell spacing, separation, grid lines
  
## DESIGN - Responsive Tables

## Assignment
Tables are inherently **not** responsive. They are always going to have the number of columns defined, and those columns will always have the data they have.

On mobile this usually results in either horizontal scrolling or squished/unreadable data, both of which are highly undesirable.

To develop "responsive" tables, the general approach is not to use `<table />` at all but rather a creative use of `<div />` and either `css-grid` or `css-table-x` rule sets to alter the layout of tables at smaller resolutions and screen widths

Inspiration: [CSS Tricks Responsive Tables](https://css-tricks.com/accessible-simple-responsive-tables/) (Great list of alternative solutions at the bottom of that article as well)


