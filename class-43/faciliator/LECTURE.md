# Lecture Guide: Gatsby and Next

## SEO

* What is it?
  * It's the way search engines can 'index' website content
  * They 'crawl' the internet (follow every link on every page, like a graph) and make content searchable.
    * Titles, Heading Tags, emphasized words, etc
    * Content density
    * Relevant images, links, link backs, etc.
* Why do we care?
  * If google or bing can't figure out what your site is about, they can't get you in the database properly.
  * If you're not in their database, nobody can search for you.
* What's the problem?
  * Let's review React. What actually renders, even if you run a build?
  * Look at the raw source (that's what the crawlers see)
  * It's just an empty `<div id="root"><div>`
  * The actual content from your components gets rendered in the browser, not initially. 
  * To the search engines, your site is EMPTY
* So, how do we address it?
  * Render dynamic content from the server (like with Express and EJS, php, etc)
    * This requires a "hit" to the server and probably a DB for every page.
    * It's slow and expensive, but necessary
  * Pre-build your .html files with all of the content in them
    * This is fast to the users(no db access on each page)
    * This is good for your server (easy to just send a file)
    * This is good for the search engines (they can see your content)
    * But ... you have to re-generate the .html after any change to your data.
    
There are a couple of frameworks for React that help us to deal with these issues, each handling it in a totally different way, but giving you the best of both worlds -- server generated content for the search engines, dynamic react in the browser, and nothing new for you to learn :)

**RECOMMENDATION** - Run the demo for Next and Gatsby after you describe them. This will help to drive the compare and contrast discussion.

## Server Side Rendering (next.js)

* Next works by running an actual server (like your create-react-app dev server)
* It reads files from a directory to serve 'pages'
  * Next sees everything render-able as a full "page"
  * You'll need to use their routers to provide navigation
* These pages have React components, can pull data, and do normal React things
* Once they render their content THEN, next.js server sends that html to the browser, along with the state and your components.
* The browser gets full markup and content (google is happy)
* The browser also gets state and react, so you can still write dynamic JS driven sites.


## Static Site Delivery (gatsby)

* Gatsby operates by generating a static version of every unique page on your site.
* Yes, actual .html files.
* React's build process creates 1 file (index.html)
* Gatsby creates many (many) .html files as needed.
* When users hit the website, they get a static .html file (super fast)
  * Included is React, your components, and state
  * So, yes, you can still write interactive JS, just like React or Next
* As your content changes, you can "kick off" a new build to regenerate
  * The downside here, is that this requires a re-deploy every time anything changes.
  
## Compare and Contrast

This is a great time to whiteboard with the students some of the obvious differences between standard React, Gatsby, and Next

