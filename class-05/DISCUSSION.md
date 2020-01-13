# Readings: Data Modeling With NoSQL Databases

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

**For your assignment, go through the reading material and watch/bookmark the additional resources resources provided. Create a wiki entry in your fork of the class repo that summarizes the principle reading topic as though you were presenting the material to a new developer.**

Wiki Entry Ideas:

- Blog Article (2-3 paragraphs with code sample)
- Dictionary / Flash Cards
- Notes in outline form

## Reading

### What is NoSQL?

#### SQL

"Normal" or "Traditional" databases like Postgres, SQL Server, Oracle and the like are "Relational", in that they store data in rows and columns and link related records through a system of keys and pointers (Foreign Keys).

These databases are known for being highly structured. You create tables by identifying the columns, their data types, and rules.  You Query the data using a special language (SQL - Structured Query Language) designed to bring all of that data together.

SQL Databases (RDS) are great for reporting or tabular data.

#### NoSQL

A "NoSQL" database is based on document storage. For example, rather than have information about a user, their order history, etc in many tables that you have to join together, a Document database puts all of that information into **One Record** that you can retrieve very quickly, having all of the data you want at your disposal.

Typically, Document data is keyed by an ID, so it acts like an Object, letting you find records in O(1) time.  Documents are not structure. They are pure JSON, storing and retrieving any data that you put into your JSON objects.  This makes them Flexible, but unstructured, hence the name.

Document databases are great for "Read-Heavy" usage and frequent aggregations.

We will be using [Mongo](https://www.mongodb.com) in this course to dive into NoSQL Systems.

### NoSQL Data Modeling

When modeling data for a Document, it's best to start with considering the data you NEED, not the data that's available. In other words, work backwards.  You can create many different documents to shape the data you need for different purposes.  You do pay a price to write to multiple documents when related information changes, but the look up speed is worth it.

![structured data model](assets/rdb.png)
![nosql data model](assets/nosql.png)

### ORMs (Mongoose)

Using raw JSON is flexible, but problematic.  Programmers don't like surprises.  Enter "Mongoose", and "ORM" for the Mongo database.

**ORM** - Object Relation Mapping

In other words, rules for Document databases. Mongoose is a Node library that makes it easy for developers to not only interface with a Mongo database, but reliably structure the data (without losing flexibility).  Mongoose provides 2 essential things to make this easy for you:

1. Schema - the rules to structure your data
1. CRUD methods (on steroids) to work easier with the data

#### A Mongoose "Schema"

```javascript
const players = mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true, uppercase: true, enum: ['P', 'C', '1B', '2B', '3B', 'SS', 'LF', 'RF', 'CF'] },
  throws: { type: String, required: true, uppercase: true, enum: ['R', 'L'] },
  bats: { type: String, required: true, uppercase: true, enum: ['R', 'L'] },
  team: { type: String, required: true },
});
```

#### CRUD Methods

(All return promises)

```javascript
    let newRecord = new schema(record);
    return newRecord.save();

    schema.findOneByIdAndDelete(id);

    schema(findById(id));

```

[Mongoose](https://mongoosejs.com/docs/index.html)

### Mongo DB Clients

#### Running a local mongodb server

`mongod --dbpath=[/PATH/TO/DATA/FOLDER]`

The above command will start a mongo db server(once you have it installed). Replace **/PATH/TO/DATA/FOLDER** with the actual path on your computer where you want mongo to store its data.

#### Accessing Mongo Data

- **Command Line Client** `mongo`
  - The stock client is the easiest way to view and query your data, right from your terminal.
- **Compass Client**
  - [Compass GUI Client](https://www.mongodb.com/products/compass) is a slick graphical client to view your mongo data
- **IDE Plugins** - Both VSCode and Webstorm have plugins that let you work with your database right in the editor.

In doubt? Refer to the **Mongo DB Cheatsheet** - Located in the [reference](../reference) folder of the class repository

#### Cloud Databases

There are a few alternatives to running Mongo locally for your web servers

- [MLab](https://www.mlab.com/) - remotely hosted mongoDB systems.  Easily setup a free database (or pay for more horsepower). Works great with Heroku
- [Atlas](https://www.mongodb.com/cloud/atlas) - Cloud based, highly scalable Mongo DB
- [DynamoDB](https://aws.amazon.com/dynamodb/) - AWS NoSQL Database. Very highly scalable. Also provides a 'mongoose'-like ORM called 'dynamoose'
- [CosmosDB](https://cosmos.azure.com/) - The Microsoft Azure equivalent for Atlas and Dynamo

## Additional Resources

### Videos

- [sql vs nosql](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

## Bookmark / Skim

- [nosql vs sql](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)
- [nosql modeling techniques](https://highlyscalable.wordpress.com/2012/03/01/nosql-data-modeling-techniques/)
- [mongoose api](https://mongoosejs.com/docs/api.html#Model)
- [mongoose middleware](https://mongoosejs.com/docs/middleware.html)
- [mongo memory server](https://www.npmjs.com/package/mongodb-memory-server)
- [supertest](https://github.com/visionmedia/supertest)
