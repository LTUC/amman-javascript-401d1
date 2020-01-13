# Readings: Node Ecosystem, TDD, CI/CD

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

**For your assignment, go through the reading material and watch/bookmark the additional resources resources provided. Create a wiki entry in your fork of the class repo that summarizes the principle reading topic as though you were presenting the material to a new developer.**

Wiki Entry Ideas:

- Blog Article (2-3 paragraphs with code sample)
- Dictionary / Flash Cards
- Notes in outline form

## Reading

### Use Your Computer Like A Developer

It's time to unlearn any bad computer usage habits that you may have developed in your pre-programmer years. It is critical that you keep your file system organized.

Writing code is difficult enough, don't allow your problem to be finding code on the file system. You should come up with a system for naming files - don't deviate from it! Keep all of your projects in one place and always use version control. Use git best practices, even when you are working on personal projects! Use the command line whenever possible.  In the long run, these techniques will save you many hours of time.

### File Naming Rules

Case matters, but not all the time! Some systems are agnostic to casing in file names, some are very strict. For this reason, be consistent in your use of names. `File.txt` and `file.txt` are clearly different to you, but some systems (like Github) see them as the same thing, so be diligent in your approach here.

- Use lowercase for all code file names.
- Use  kabob-case ("-" separated words) for all code filenames with multiple "words".
- If you are forcing a file to be first or last in a listing or are calling out importance, it is standard to capitalize the entire filename.
  - Github sets the standard of **README.md** for this reason.

### NodeJS

NodeJS is an open source framework for writing Javascript on your operating system. It is compromised of the **V8** Javascript runtime and the **NodeAPIs**. V8 supports many features in the latest version of Javascript, called ES6 (or ES2015), which has added many new syntax features and optimizations. **V8** is the Javascript runtime developed for the Chrome browser and is written in C and C++. The Node APIs are written in C, C++, and Javascript. Node was developed to enable developers to easily write code with asynchronous input and output (I/O). In many other languages, asynchronous I/O creates a lot of work for developers and can be error prone. NodeJS uses an event loop driven and non-blocking architecture - this enables NodeJS to have very low overhead when it is not running.

### package.json

The `package.json` file is used to describe and configure a NodeJS package. The only two fields that are required by a package.json are `name` and `version` but we often use `npm init` or `npm init -y` to automate the creation of this file. If a package has external dependencies, they are listed by name and version under the fields `dependencies` and `devDependencies`. If the package depends on an external package to run, the external package should be listed under `dependencies`. If the external package is only needed in development (like a testing framework), it should be listed under `devDependencies`. `package.json` files can have a `scripts` field where keys can be associated with unix commands. This gives us the ability to create custom automation scripts.  NPM scripts have the added benefit that they can run any command line utility (CLI) defined in a dependency, without globally installing the CLI on you operating system.

### Semantic Versioning

The NodeJS/NPM community follows semantic versioning ("semver"). Semantic versioning describes how to manage version changes to a software product. Semver formats the version number using a `MAJOR.MINOR.PATCH` construct. You should change a MAJOR version when you make incompatible API changes, a MINOR version when you add functionality in a backwards-compatible manner, or a PATCH version when you make backwards-compatible bug fixes.

### CommonJS modules

NodeJS supports **CommonJS modules**.  These modules enables developers with the ability to organize their code into small files that define specific functionality. This plays a huge role in allowing Javascript developers to build large and scalable applications. In a CommonJS module, anything that is assigned to `module.exports` can be accessible to another module through invoking the `require` function. The `require` function expects a relative or absolute path to the module being imported, like `require('./relative/path/to/the/module.js')`. CommonJS modules can not be co-dependent, meaning that if module "A" requires module "B" then "B" can not also require "A".

### Test Driven Development

Test driven development (TDD) is a methodology for writing code. It relies on a very short development cycle, which means that it expects developers to create small and testable features. TDD can speed up development time, validate the integrity of new code, and help developers understand their goals. TDD is broken down into three steps - red, green, and refactor.

#### RED

Make a plan for the code that needs to be written. Write tests that will run your code and check for expected behaviors. At this point, if you run your tests, they should fail (red).

#### GREEN

Write code to pass the specifications of your tests, without making it perfect. If you succeed, when you run your tests, they should pass (green).

#### REFACTOR

Refactor your code for speed, memory optimization, and most importantly **readability**. Your tests should still pass after this step.

### Running Tests

- Install `jest` and `eslint` as dependencies
- Install a valid .eslintrc.json file in your project
- Edit your package.json to include test commands (see below)
- Run `npm test` in your project to run your test suite
- Run `npm run test-watch` in your project to continually test your code as you develop.

**package.json**

``` javascript
  ...
  "scripts": {
    "start": "node index.js",
    "lint": "eslint **/*.js",
    "test": "jest --verbose --coverage",
    "test-watch": "jest --watchAll --verbose --coverage"
  },
  ...

```

### Continuous Integration

Continuous Integration (CI) is the process of regularly merging individually developed features of code into a shared repository as frequently as they are made. In the most basic setup, a team could simply use git to merge code into a master branch. However more advanced CI patterns can be developed. These patterns can automate static analysis (lining), running unit and integration tests, testing platform support, enforcing code reviews, and much more.

### Continuous Delivery

Continuous Delivery (CD) is the process of deploying software in short cycles by ensuring that software can be deployed at any time. CD pairs very will with advanced CI setups that help ensure the core product is always a stable code base.

### Github Actions

Github Actions is a hosted and distributed continuous integration service (CI) that is most often used to build and test software projects hosted on GitHub.

Actions are configured by adding a rules file (`.yml` formatted) in a folder named `.github/workspaces` in the root directory of the repository. This file specifies the programming language used, the desired building and testing environment and various other parameters. Github provides a tab in your repository to help you set this up.

Once you have the setup completed, Github will automatically run your tests on every push and/or pull request. It can (and will) prevent you from merging to a branch (such as master) and hence do a deployment to a production server when your tests are not passing.

#### Example Action

``` javascript
name: Node CI

on: [push,pull_request]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x]

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: npm install, build, and test
      run: |
        npm ci
        npm run build --if-present
        npm test
      env:
        CI: true
```

## Additional Resources

### Videos

- [TDD in JS](http://www.letscodejavascript.com/){:target="_blank"}
- [what is npm](https://docs.npmjs.com/getting-started/what-is-npm){:target="_blank"}

### Bookmark / Skim

- [npm docs](https://docs.npmjs.com){:target="_blank"}
- [jest docs](https://jestjs.io/docs/en/getting-started){:target="_blank"}
