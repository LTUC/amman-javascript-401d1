# SASS Basics

**What is SASS?**

SASS is a CSS "Pre-Processor" Much like Babel does for Javascript, it allows you to code CSS in a hierarchical way, with variables, loops, functions, and obvious nesting and then compiles that code out to "real" css.

In addition to being "syntactic sugar" for the developer, it also lends itself to highly scalable component based CSS, extensible "themes"

**Variables**

With SASS, you can declare variables, prefaced with a `$`, using standard CSS assignment syntax, and then re-use those variables anywhere in other CSS declarations.

**Nested Selectors**

In SASS, you can declare your selectors in a hierarchical fashion, almost mirroring your HTML structure. This allows you to follow the natural semantics of your document tree.

**SASS Code**
```
$bgColor: #ccc;

header {
  nav {
    ul {
      display:flex;
      justify-content:space-around;
      li {
        display:inline-block;
        padding:.5em 1em;
      }
    }
  }
}

main {
  
  margin: 1em;
  
  section { 
    background: $bgColor;
    padding:.5em;
  }
  
}
```

**Resulting CSS**
```
header nav ul {
  display: flex;
  justify-content: space-around;
}
header nav ul li {
  display: inline-block;
  padding: 0.5em 1em;
}

main {
  margin: 1em;
}
main section {
  background: #ccc;
  padding: 0.5em;
}
```

## Using with a vanilla website
While you can write SASS in .scss files all day long, you may not include them directly into a .html file.  You must first take the step of compiling your SASS into CSS.  Generally, this is done manually during development, and automatically by your build system during deployment.

To compile SASS manually, you'll need to [install SASS](https://sass-lang.com/install) on your computer, and then issue the `sass` command whenever you want to compile your .scss files into .css.  There are automation tools to help you with this, which can be found on the SASS site.

## Using within a React App
Whether you're using React with WebPack, Parcel, or create-react-app, SASS support, once enabled in your build system (read those docs separately) is as simple as importing your .scss files into your app or component...

Once imported, the app builder will automatically compile your SASS into CSS and include it into the bundle that is sent to the browser. 

```
import './footer.scss';
export default class Footer extends React.Component {
 // footer goodness here
}
```
