# DSA/Challenge Submission Instruction

## Create a new repository

> `data-structures-and-algorithms`

- At the root of this folder, you'll need a standard testable node setup (config files available in the class repo)
  - package.json
    - jest and eslint as dependencies
    - `test` script defined
    - `lint` script defined
  - .eslintrc.json
  - .gitignore

## For each new data structure, create a folder

- In this folder you will create your constructor/library module
  - i.e. `data-structures-and-algorithms/linked-lists`
  - Your importable module should be named `index.js`
  - Include JSDoc comments above every function in your implementation
    - Run `npm run docs` in the root folder to generate your master documentation
    - This documentation will grow and become more useful over time as you develop more DSA implementations
  - Place your tests in a __tests__ folder within the module directory

## Daily Code Challenges

- Work in a folder called called `code-challenges` in your `data-structures-and-algorithms` repository
- For each challenge, create a sub-folder for that challenge (i.e. `challenge-02` along with a `__tests__` folder
- Your files for the challenge should be named appropriately
- These challenges will generally require you to use a data structure module to solve the challenge. This structure should allow you to easily import those in, like so:
  - i.e. `let sll = require('../linked-lists');`
- **Time-Box your code challenge to ~1.5 hours each day**
  - :45 at the whiteboard with your partner
  - :30 composing your code and tests

### Testing

- Write a complete set of tests for all data structures
- Your daily code challenges should also have tests as a means of running the actual code
- Your tests must be running green on Github Actions

## To Submit Your DSA Lab or Challenge

- Work in a new branch of the DSA repository
- Follow the assignment instructions
- Create a PR with your work
- Ensure that your PR is picked up by `GitHub Actions` and that your tests are visibly running and passing.
- Submit to canvas:
  - A README.md file in the folder of the work you are submitting which contains:
    - A link to the PR for the branch your code was written to
    - A link to your passing tests from that PR in GitHub Actions
    - For Data Structures: A link to the documentation folder
    - For Code Challenges: A photograph of your whiteboard

Your folder structure should look like this:

```bash
  data-structures-and-algorithms
    |__ docs
    |
    ├── challenges
    │   └── challenge-01
    │       ├── __tests__
    │       │   └── something.test.js
    │       └── something.js
    └── linked-lists
        ├── __tests__
        │   └── linked-lists.test.js
        └── index.js
```
