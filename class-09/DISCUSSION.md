# Readings: API Server

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

**For your assignment, go through the reading material and watch/bookmark the additional resources resources provided. Create a wiki entry in your fork of the class repo that summarizes the principle reading topic as though you were presenting the material to a new developer.**

Wiki Entry Ideas:

- Blog Article (2-3 paragraphs with code sample)
- Dictionary / Flash Cards
- Notes in outline form

## Reading

### Express: Router Parameters

In Express, we already know that parameters in routes can be read

```javascript
app.get('/places/:city', (req,res) => {
  // req.params.city is now a readable value
})
```

We also know that we can run middleware on any route

```javascript
app.get('/places/:city', getZip, (req,res) => {
  // req.params.city is read from the param
  // req.body.zip was grafted onto the request object by the getZip middleware
})
```

We can also run middleware on every request

```javascript
app.use(getZip)
```

Those are both pretty extreme. Middleware that has to run on 10 out of 15 of your routes (e.g. any route with a `city`) requires you to either put it on all the routes and make it ignore the requests without a city (ugly) or put that special middleware on every route with a `city` parameter (also ugly).

Express lets you run middleware only when certain parameters are present and expected, eliminating that choice.

```javascript
router.param('city', function (req, res, next, id) {
  console.log('Only runs on routes that have a city param')
  next()
})


// That middleware will not run here
router.get('/places/seattle', function (req, res, next) {
  res.send(`Zip: ${req.body.zip}`);
})

// That middleware does run here
router.get('/places/:city', function (req, res, next) {
  res.send(`Zip: ${req.body.zip}`);
})

// But not here
router.get('/flights/to/:airport', function (req, res, next) {
  res.send(`Zip: ${req.body.zip}`);
})

```

### Sub Documents in Mongoose

Mongoose is a schema driven ORM, which gives us the opportunity to provide structure to our Mongo documents. By default, Mongo (all NoSQL Databases, really) are not structured by default. Mongoose takes some of that pain away from us as developers and allows us to provide some level of rules and validation around our data models.

With the addition of "Sub Documents", Mongoose gives you the ability to take that a step further and use a schema to describe a deeper part of a data model. This can be useful when a document contains potentially a list of other documents. For example, an online store likely has a collection of products. They probably also have a list of customers, each of which has placed orders which contain one or more products. When modeling the users collection, it would be nice to add `orders` as an array, and within the orders, and array of `items` ... if you've previously modeled an item, you can re-use that schema within the orders section of a customer to keep the shape of that data the same.

**Note**: Simply sharing a schema as a sub-document doesn't bring in or connect the data, it simply uses the schema/rules. It'll be up to you to manage the actual data.

### Sub-documents [docs](https://mongoosejs.com/docs/subdocs.html)

```javascript
var childSchema = new Schema({ name: 'string' });
var house = new Schema({ address: 'string', city: 'string', state: 'string' });

var adult = new Schema({
  // Array of subdocuments
  children: [childSchema],

  // Single nested subdocuments.
  address: house
});
```

Sub Documents are great for supportive data such as comments on a blog post, but they're not "populated" unless you do this manually. This can be difficult to manage, and does represent a downside to NoSQL modeling. If you, using the example above, modify a "house" document, it does nothing to any "adult" records ... in the setup above, houses (and children) are totally distinct collections that don't relate to anything.

This can be a good thing, even if it's confusing at first. Consider our first example of a store with items and customers with orders that have items in them. It's very likely that a customer placed an order and an item may have been priced at $9.99.  Later you change the price to $10.99.  You wouldn't expect that customers' orders would automatically get updated with that price.  But you might want to change the name of an item in which case you would want to update customer orders to keep the reporting nice. So, modeling in this way, keeping things separate makes great sense, even if you have to keep a few tables in sync by hand.

### Joining Data/Documents in Mongo

There are definitely other scenarios where you'll want data to be joined in real time. Take for example, a sports team, where you have a list of teams and a list of players. Generally speaking, players only play on one team at a time. So when modeling a team with a list of players, it would be advantageous to somehow link those two collections together.

**Note** that noSQL Databases don't really join, and doing so generally is considered an anti-pattern. Ensure that you're modeling things in the most logical way for this data store.

- `populate()` is a method we can use in Mongoose to connect 2 collections
  - Method 1: physically joining using a reference to another collection
  - Method 2: Virtual Population
    - Create a virtual field in a document pointed to a field in another one.
    - In `pre('find')` you do a collection "on the fly" which can be more efficient than storing the relation.
- Pre and Post hooks (middleware)
  - Mongoose allows you to inject logic at various points in the lifecycle of a data record.
    - User can perform validation, normalization

#### Direct Population (References)

Create a reference column in the collection and then when you save, you need to `push()` into the reference field with the `_id` of the referenced document.  This results in quicker `find()` but requires a lot more management on saves, updates, deletes.

```javascript
const personSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

const storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});
```

### Virtual Joins

In this example, we create a virtual field in `teams` called `players` by connecting them with named fields, and then doing a populate as we find/load documents. This "join" happens in real time, as the records are being processed by Mongoose and can be quite slow, although convenient.

```javascript
const teams = mongoose.Schema({
  name: { type:String, required:true },
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

teams.virtual('players', {
  ref: 'players',
  localField: 'name',
  foreignField: 'team',
  justOne:false,
});

teams.pre('find', function() {
  this.populate('players');
});

```

## Additional Resources

### Videos

### Bookmark / Skim

- [express router.param() middleware](https://expressjs.com/en/4x/api.html#router.param)
- [mongoose middleware](https://mongoosejs.com/docs/middleware.html)
- [mongoose subdocs](https://mongoosejs.com/docs/subdocs.html)
- [mongoose populate virtuals](https://mongoosejs.com/docs/populate.html#populate-virtuals)
