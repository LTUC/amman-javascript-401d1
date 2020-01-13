# DESIGN - SASS Design Scaffold

## Assignment
Get your design workspace ready for development and show **proof of life**

*Resist the urge to style it all up right now ... you will be styling this website/content a little bit each day as you progress through the coursework, but it might look ugly in the meantime.*

**Inspiration**

* [10 Mixins you should be using](https://engageinteractive.co.uk/blog/top-10-scss-mixins)
* [SASS Mixin Guide](https://marksheet.io/sass-mixins.html)
* [10 more mixins...](https://medium.com/@justinbrazeau/10-useful-sass-mixins-for-automation-833cdee9d69b)
* [buttons](https://freshdesignweb.com/css3-buttons/)


### Requirements
* Create the design topology as noted below

```
    /styles
        /lib
            /_variables.scss
            /_mixins.scss
        /core
            /_reset.scss
            /_header.scss
            /_footer.scss
            /_base.scss
        /design.scss
            
```

* At the top of your `design.scss`, do an `@import` for each of these partials

#### Use variables into your design ... 
  * In `_variables.scss`, set a few key variables for your design
    * `$rootColor`
    * `$accentColor`
    * `$bleed`
    * `$space`
    * In your `design.scss` file, make use of those variables by declaring a few styling rules for the basic elements, to your tastes
      * Use `$space` to declare the gutter/margin between major elements
      * Use a variation of `$rootColor` and `$accentColor` to colorize the header and footer elements and their text
      
#### Add support for mixins to your design
* In `_mixins.scss`, create some mixin functions...
    * `@mixin borderRadius($radius)` - create border radius rules based on `$radius`
    * `@mixin flex()` - take in params that would output a proper set of flex rules (row/column, spacing, etc)
    * `@mixin center()` - make it easy on yourself to center things vertically and/or horizontally.
    * Make some border mixins (with good names) that you can call to apply various box shadow effects
    * This file will (and should) grow with you over time as you find opportunities to create re-usable functionality.
    * Generally, a proper use of mixins in sass is to provide a full set of css rules, including browser prefixes.
    
### Do some core styling
* Add styling rules for core page elements
  * Header
  * Footer
  * Main
  * Links
  * Text (font ramp)
