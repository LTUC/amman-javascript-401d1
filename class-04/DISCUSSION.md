# Readings: Data Modeling

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

**For your assignment, go through the reading material and watch/bookmark the additional resources resources provided. Create a wiki entry in your fork of the class repo that summarizes the principle reading topic as though you were presenting the material to a new developer.**

Wiki Entry Ideas:

- Blog Article (2-3 paragraphs with code sample)
- Dictionary / Flash Cards
- Notes in outline form

## Reading

### Javascript Data Modeling

Why "Model Data?"

From a coding (and cognitive) standpoint, it's crucial that you can consistently describe "things" both physically (what properties do they have) and behaviorally (what can they do). Once defined, you can then create logic, workflows, and applications that use this information to get work done. Creating reusable models means not having to be explicit about this every time you need to modify/use data.

Javascript has a limited number of built-in data types.  This includes objects, arrays, strings, numbers, and booleans. Data modeling in Javascript is the process of taking a real world or conceptual idea and encoding it into Javascript's built in data types. Technically, there isn't a right or wrong way to model data in software development because it has been proven that any idea can be represented using any data structure. However, it is important to follow several practices to boost software readability and maintainability. Boolean values should be used when the data can have only two states. Numbers should be used when the data could support arithmetic operations. Strings should be used when the data is representing a natural language. Arrays should be used to bundle multiple pieces of like data. Objects should be used to bundle multiple pieces of different data.

### Modeling behaviors

#### CRUD - Basic Data Operations

- **CREATE** - Add a record to a data store
- **READ** - Retrieve a record from a data store
- **UPDATE** - Update a record within a data store
- **DELETE**  - Remove a record from a data store

#### Interfaces & Services -- The "Repository" design pattern

"A modeling technique providing common access points in an API (i.e. the CRUD methods) that is agnostic to the storage medium and techniques."

This is a layer of abstraction that sits between the code and the actual data source.

Consider the simple example below. We have a data model that seems to use PostgreSQL to store data. In another module, we create a new instance and then `.save()` and maybe `.delete()` records through it.  That client library (perhaps it's an express server) does not know (or care) how the `Location` actually works. It just calls the CRUD style methods that it provides. If at some later date, the developer of the `Location` data model changes the database from PostgreSQL to something else ... so long as the methods are the same, any other apps that use `Location` will work without any modification.

This represents a service that is loosely coupling the dependencies (specific data services) through behaviors

```javascript
let pg = require('pg');
class Location {

  constructor(schema) {}

  create(record) {
    // Run the SQL to save a record
  }
  delete() {}
  update() {}

}

// Some other module
let seattle = new Location();
seattle.create({city:'Seattle', ...});
seattle.delete();
```

#### Implementation

The specific means by which a data model interacts with a persistence layer (file, mongo, postgres, etc)

In the above example, this refers to the code in the methods that does the actual work. This can change, so long as the inputs and outputs of those methods remain the same.

#### Normalization and Validation

Sanity checking data to ensure that it conforms to the modeling rules, integrity checks, etc prior to doing any operations with it.

We've written a module that does this ... many database systems have libraries that do these tasks for you, in very consistent and predictable ways.  It's an expected layer of code safety that data services should provide.

## Additional Resources

### Videos

### Bookmark / Skim
