'use strict';

const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/class-09';
mongoose.connect(URI);

// Create 3 schemas that use each other
const itemsSchema = mongoose.Schema({
  name: { type: String },
  price: { type: Number },
  quantity: { type: Number }
});

const ordersSchema = mongoose.Schema({
  items: [{ type: itemsSchema }]
});

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  orders: [{ type: ordersSchema }]
});

// In Mongoose, we need to create classes out of the schemas
const Users = mongoose.model('users', userSchema);
const Orders = mongoose.model('orders', ordersSchema);
const Items = mongoose.model('items', itemsSchema);

// --------------------------------------------


// Now, create an instance of a user and save it.

createRecords();

async function createRecords() {

  try {
    // New User - Create and save to db
    const user = await new Users({ name: "John Cokos" }).save();

    // New Order (need to create an empty instance)
    const order = new Orders({ items: [] });

    // Add some items to it (each are an instance)
    order.items.push(new Items({ "name": "Phone", "price": 999, "quantity": 1 }));
    order.items.push(new Items({ "name": "TV", "price": 499, "quantity": 1 }));
    order.items.push(new Items({ "name": "Pants", "price": 9.97, "quantity": 3 }));

    // Add this order (and items) to the user and then save it again
    user.orders.push(order);
    const obj = await user.save();

    console.log(JSON.stringify(obj, null, 2)); // Pretty Print Deep Object

  } catch (e) { console.error(e.message); }

  disconnect();

}

function disconnect() {
  mongoose.disconnect();
}