# 401 Javascript: Post-Grad Roadmap

So it's after week 10 and the Full-Stack JavaScript class is now over. You've shut down MongoDB for a bit, slept for a few days straight, and now you're up and ready to do something more. The frenzied pace that we've worked at for 2.5 months is gone, and the only pressure to perform is the pressure of unemployment. It's terrifying, but it's not as pressing when there isn't a concrete deadline to hit.

The main danger of this point in time, between the end of class and the start of your careers, is the temptation to ease off on sharpening your skills. It's easier to make excuses now; easier to let other priorities get in the way.

However, a muscle unused becomes atrophied and skillsets are no different. Consistent practice keeps you sharp and is good to make a habit of, but consistent practice is simply maintenance on the skills that you already have. True growth as a developer, and in general, comes from making the habit of adding new things to your repertoire.

What new tools should you add to your skillset? How much time should you allocate to practice vs exploration? When do you find time to stay on top of the job application process?

This roadmap will begin to answer those questions, but is not a hard-and-fast plan for everyone. Read it through and do what works best for you, modifying the contents with what fits your schedule, your finances, and your interests.

# Tips on Structuring Time and Accountability
The main thing missing from post-graduate, pre-employment life is structure and accountability. There's nowhere to be at 9am, and nothing to get done by 5pm. There are no partners to keep up or communicate with unless you forge those relationships yourself.

So, create your own time schedule and find someone to keep you accountable. Here's a guideline for separating your concerns throughout your day:

**Any Given Weekday...**

- 3 hours: job search
- 2 hours: interview prep
- 1 hour: skills maintenance
- 1 hour: skill building
- 2-3 hours: personal project work
- Other Unclaimed Time: more personal project work
- Evening Hours: attend meetups

## Job Search (3 hours)
This phase of your day consists of more than just archiving a set of links. The job search is a tedious part of your career, and may never be a pleasant experience. However, if you break this up into more digestible components, you can at least ease the pain a bit.

To start your job search, harvest links to companies that interest you. Then, before you even start tailoring your resume or writing the first character of your cover letter, research the company. Don't just throw everything against the wall to see what sticks, look into what actually may interest you. What do they do? What clientele do they serve? What roles do developers serve at that organization? Is there anyone on LinkedIn from that organization that I can take out to coffee and get more information from? It's far more obvious to spot a candidate with actual interest in the position vs a candidate just trying to pay rent.

### Common Divisions in Javascript Careers
It helps to have a heading when applying for jobs, and there's so many titles thrown around that it can be tough to tell what to look for. Here are some common titles in the world of Javascript, along with some VERY general summaries:

- **Software Developer/Development Engineer**: Someone that writes software and features for existing apps, or builds apps from scratch. Often will use ReactJS, AngularJS, NodeJS or other web frameworks.

- **Software Development Engineer in Testing (SDET)**: A developer that's fluent in the frameworks of the day, but doesn't write code that increases the feature set. They only test code, both with automated test suites and with behavioral tests (click this thing and see if it breaks).

- **Backend Web Developer**: Often will be tasked with writing NodeJS backend Javascript code, but rarely deal with anything that is displayed directly to the front-end. They will often build out the code that powers a site's API. They may not even work on a web app at all, sticking only to writing utility scripts on the server-side.

- **Full-Stack Web Developer**: A web developer that knows how to serve the site, and also how to tailor the user experience on the front-end. You're not going to fit this job well without a solid handle on HTML, CSS, and JS on the frontend. In this role you'll have to have some type of eye for design, and be able to build a useful and intuitive user interface as well as the back-end that serves that interface.

- **Developer Operations (DevOps) Engineer**: An app-deployment specialist. The code that they write is used to package and serve the site instead of add features to it. This will require a ton of work with tools from the following stack (note: not a complete list): AWS, Google App Engine, Microsoft Azure, Heroku, Ansible, Fabric, OpenStack, Docker, Jenkins, etc etc.

AFTER you research, then as a part of the job search process send out applications, write or revise your resume, and write/revise your cover letters.

## Interview Prep (2 hours)
Interview preparation considers only the actual interview process; what happens when you get a call or an on-site interview. There are two main things to prepare for here: behavioral questions and coding questions.

### Behavioral Interviewing Prep
For behavioral interview questions practice will always make the master. These questions will ask less about what code you can write and instead seek to find out how you behave in a working environment. Examples are:

- Give me an example of a time when you set a goal and were able to meet it.
- Tell me about a time when you had too many things to do and you were required to prioritize your tasks.
- Tell me about a time where you had to make a difficult decision.
- Give me an example of a time when you failed to accomplish something that you worked hard on.

Find someone to bounce these questions off of. Trade roles as interviewer and interviewee. Polish your responses not so that they sound “perfect”, but so that you're doing more than just answering the question. You're showing with every response why you're a good fit as a part of a larger team or organization. Show that you can keep goals beyond you in mind when you make decisions.

There are tons of resources for practicing answering these types of questions. A simple google search for “behavioral interview questions” returns these as the first few results:

- [Sample Behavioral Job Interview Questions](https://www.livecareer.com/career/advice/interview/sample-behavioral)
- [30 Behavioral Interview Questions You Should Be Ready To Answer](https://www.themuse.com/advice/30-behavioral-interview-questions-you-should-be-ready-to-answer)
- [Behavioral Interview Questions and Answers 101](https://theinterviewguys.com/behavioral-interview-questions-and-answers-101/)

### Coding Interview Prep
For coding questions, questions are often asked about data structures and sorting algorithms. So, review the data structures and algorithms that we've done in this class. Here's a listing of them:

- Singly-Linked List
- Doubly-Linked List
- Stack
- Queue
- Double-Ended Queue
- Graph
- Priority Queue
- Heap
- Binary Search Tree
- Hash Table
- Insertion Sort
- Merge Sort
- Quick Sort
- Radix Sort
- Trie Tree

What are some good ways to review and practice?
 - Work strategically with a partner
   - Faux Pairing
     - One person should conduct the interview
     - At the end, that person should type in the written code into an IDE
     - Navigate the interviewee on debugging it
 - Work alone
   - Whiteboard a question from our list, geeks for geeks or leet code
   - Type in your solution to your IDE and see if it works
   - If it doesn't, re-write it on the board (debug it with a pen) and repeat
   - Learning how to "compile" code visually will make you a better white boarder
   
 - Write a blog post about each one! In that blog post, write out the code for the Javascript implementation of these data structures and know them inside and out. If you decide to add the ability for the structure to be initialized with an iterable, say why. In fact, look up the specification for each structure on Wikipedia, and then write about every departure that you take from that specification. Used a generator? Why? Recursion instead of iteration? What motivated that?
 
 - Dig deep into algorithmic complexity. 
   - Learn more about the math behind space and time complexity
   - Practice **proving** your Big O calculations
   - Understand the trade-offs between different implementations of the same data structure or algorithmic concept.

 - Being solid on the theory behind different abstract data structures is great, but they're best used in practice.  Fire up your API server or a React application and do something REAL.
   - Implement actual business code using a data structure implementation
     - Build out a rotator component using a linked list
     - Create a "join" manually combining objects
     - Implement a search/filter using a BST

## Skills Maintenance
As part of both 301 and 401 coursework, there were "warm-up" and "practice" challenges that were to be done each day of the week. At the time you learned them, they each probably took you hours. Now that you're a seasoned pro, you can probably do more than a few of these within an hours time. Make a plan to cycle through all of the code challenge and warmup/practice assignments from 301 and 401.

**It is absolutely critical that you maintain a mastery of the language fundamentals, so that in your job and projects you can focus on actual problem solving, not implementation details.**

[301 Code Challenges](https://codefellows.github.io/code-401-JS-prework/301-code-challenges)

[401 Warmups and Practice](https://codefellows.github.io/code-401-javascript-guide/curriculum/warm-ups/)

## Skill Building
One of the best ways to build on your skills is to apply new tech to things you already know. By focusing on interesting ways to modify, improve, and iterate on things that you know intimately, you can focus on the new technology itself, and not solving a new problem at the same time.

Here are some suggestions for layering on new technology, development patterns and depth to the things you already have a deep knowledge of:

- **Add `/graphql` support to your express API** - keep the current v1 rest routes and models in place, make use of the mongo models/classes, and add dynamic `graphql` queries and mutators, turning that app into a truly forward thinking api.
- **Add SQL/ORM support to the API**
  - Currently, it just supports mongo and text files. Add postgres, mysql, SQL Server model class support
- **Deploy your api server and 'q' server to the cloud**
  - AWS EC2
  - Azure
- **Replicate the functionality of your API using serverless methodologies**
  - AWS API Gateway + Lambda Function + DynamoDB
  - Azure API Gateway + Function App + CosmoDB
- **Re-Code your API and Q servers with Typescript**
- **Re-Code the React City Explorer Front End with other frameworks**
  - Angular 1
  - Angular Latest
  - Vue
- **Use Gatsby or Next.js to write a front-end for a Wordpress site**
  - Wordpress has a great CMS and admin site and a full REST API
  - Use your front end skills to wire up something completely custom 
  
## Stay Plugged In
  - Read Medium Posts and comment (engage in conversation!)
  - Write Medium and Blog posts (start some conversation!)

## Personal Projects 
At the end of the day, no matter how much experience you may have as a developer, mostly the point that anyone will care about is that they can tell you to do a thing, and you can actually do that thing. However, because you lack experience as a Javascript developer, you have to make up for the buffer you would have had from a career with a body of work that gives substance to your claims of proficiency. Out of all three of these sections, this is the most important. Building personal projects shows that you can do the thing.

Aim to produce at least one small serious project every 2-3 weeks. If you decide to make a larger, more involved project, aim for producing every 4-6 weeks. Whatever your other obligations may be, you should set a restriction on yourself to publish no fewer than one project per month, unless you absolutely need that extra time.

Every project that you build needs to show that you have some understanding of best practices. What this means is:

- Full documentation of every script, function, class, and method.
- At least one test for every major function, class, or method that you write.
- Create **thorough** tests, meaning anticipating the ways in which your code should succeed, as well as how it should fail.
- Create a verbose `README.md` file that details exactly how a completely new developer can get up and running with your codebase.
- Showcase *at least* 80% test coverage, with TravisCI and Coveralls (or related coverage software) badges that show how awesome of a developer you are.

Projects do not need to simply be websites, storefronts, or other tactical applications. Creating new frameworks, libraries, NPM Packages and other tools for yourself and other developers not only makes your long term developer life easier, it showcases depth.

- Publish your re-usable React components
  - `<If />`
  - `<Modal />`
  - `<Rotator />`
  - `<Card /> <Deck /> <Page />`
  -  etc
- Publish your most used middleware and other libraries
  - 404, 500, model-finder, etc
  
For more tactical things, what projects should you work on? The first thing that you should look to do is have a web presence. This means that you should have your own website (preferably with a custom email). Something like <http://www.myname.com>. Or, if you have a brand that you want to push forward or a name that applies to you, use that.

### Your Portfolio Site
Your portfolio site should tell a newcomer who you are, what your education is, and where your interests lie. For that last point, reinforce what your interests are through consistent blog posts. Figure out a schedule that works for you. Every day is likely entirely too frequent for most humans. How about every week? Or every other week? The interval isn't what matters so much as the consistency, so choose a pace that you can be consistent with.

Aside from blog posts, there should be obvious links to your past and ongoing projects. See if you can even integrate an AJAX call to your github page that shows what repos you've worked on last!

Finally make it look good, because all the skill in the world won't get you in the door if you present poorly. This means some decent HTML, CSS, and JavaScript. If you're angling for a job that doesn't deal too heavily with the front-end then feel free to use [Zurb Foundation](https://foundation.zurb.com/), [Bootstrap](https://getbootstrap.com/), or any other pre-built themes. If you're looking more toward front-end development, or true full-stack development, then at least for your portfolio site write your own HTML/CSS/JS.

### After the Portfolio Site
So you've built your portfolio site and need ideas for what to do next. Common from-the-ground-up projects are things like:

- To-Do Lists
- Facebook/Twitter/Tumblr/Instagram clones
- Person-to-person sales sites
- Chat bots
- Recipe sites
- Weather apps
- Friend finders
- Inventory trackers
- User-editable data repositories
- Restaurant/Bar/Hospital/Apartment finders

If you're not really into building things from scratch, feel free to contribute to any one of thousands of active or stale open-source projects. Open source projects are a great way to get your name out there, and a great impetus for presenting lightning talks at meetups both local and distant. Make a fork, work on some code, and send a pull-request back.

GitHub keeps track of lots of trending open source projects.  If you wanted to get started on this path, here's some good resources to do so:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub Explore](https://github.com/explore)
- [Your First PR](https://opensource.guide/how-to-contribute/)

### Meetups
By now you should already be familiar with the Community Hack Night. However, there are dozens of other meetup groups for coding and related subfields.

Have an interest in Natural Language Processing? Check out any one of these [Seattle NLP](https://www.meetup.com/topics/natural-language-processing/us/wa/seattle/?_cookie-check=KrV9UHKSzRPX_h_Q) meetups.

Interested in data science more broadly? Attend an event by the [Seattle Data Geeks](https://www.meetup.com/seattle-data-geeks/) or [Seattle Data Science](https://www.meetup.com/Seattle-Data-Science/).

Do you just want more Javascript? For that hunger, there's [SeattleJS](https://www.meetup.com/seattlejs/).

Half the battle is being known, so showing your face early and often at various meetups will help you along that line. You never know, you may end up sitting beside your next coworker!

**And don't simply go to meetups either, speak at them!** There's no reason why you can't give a lightning talk about every personal project you complete outside of your portfolio site. In fact make that a goal: whenever you complete a project, build an 8-minute lightning talk about it and submit it for presentation at a meetup!

### Accountability
These things are all great in theory, but if no one holds our feet to the fire then we find it much easier to make excuses and fall out of our good habits. Find someone to hold you accountable. Oftentimes this is easiest with friends or loved ones, however they aren't always available. Luckily for you, you've got a whole set of classmates and other graduates to pull from to hold you accountable.

Make a pact with someone (or several people) to meet every week or every few days. Review each other's code. Edit each other's blog posts. Contribute to each other's projects, or collaborate on the same project. Set goals together and celebrate together when you meet those goals. “Let's each send out 10 applications this week!” “How about you write a blog post about AWS, I write one about Google App Engine, and we reference each other's posts?” “You build out the scaffolding for this project and I'll add this other app, since it's something I'm working on for one of my other projects.”

Find someone that you work together well with and...work together! A solid collaboration can severely slash any project's timeline, giving you more content to fill your resume, LinkedIn, and portfolio. And don't limit yourself only to Javascript graduates. One of the great things about the larger programming world is that different languages can do different things well that Javascript cannot (or should not) do. Collaborate with a Python grad so that you can build a front-end and they can build a back-end that accesses a custom API and displays data to the user. Work with an iOS developer and build yourself a solid mobile app. Bolster the diversity of your experiences with what time you have before you get locked into a career as one thing.

With that, you should be armed and ready to take on the job search!  Above all else, stay sharp, and **learn more faster!**
