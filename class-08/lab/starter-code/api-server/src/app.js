'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./middleware/error.js');
const notFound = require('./middleware/404.js');

// Models
// TODO: Install your MONGOOSE DATA MODELS from a previous lab
const Products = require('./models/products.js');
const products = new Products();

const Categories = require('./models/categories.js');
const categories = new Categories();

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/v1/categories', getCategories);
app.post('/api/v1/categories', postCategories);
app.get('/api/v1/categories/:id', getCategory);
app.put('/api/v1/categories/:id', putCategories);
app.delete('/api/v1/categories/:id', deleteCategories);

app.get('/api/v1/products', getProducts);
app.post('/api/v1/products', postProducts);
app.get('/api/v1/products/:id', getProduct);
app.put('/api/v1/products/:id', putProducts);
app.delete('/api/v1/products/:id', deleteProducts);

// Catchalls
app.use(notFound);
app.use(errorHandler);

// ROUTE HANDLER FUNCTIONS
function getCategories(request, response, next) {
  // expects an array of object to be returned from the model
  categories.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}

function getCategory(request, response, next) {
  // expects an array with the one matching record from the model
  categories.get(request.params.id)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function postCategories(request, response, next) {
  // expects the record that was just added to the database
  categories.post(request.body)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}


function putCategories(request, response, next) {
  // expects the record that was just updated in the database
  categories.put(request.params.id, request.body)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function deleteCategories(request, response, next) {
  // Expects no return value (resource was deleted)
  categories.delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}


function getProducts(request, response, next) {
  // expects an array of objects back
  products.get()
    .then(data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}

function getProduct(request, response, next) {
  // expects an array with one object in it
  products.get(request.params.id)
    .then(result => response.status(200).json(result[0]))
    .catch(next);
}

function postProducts(request, response, next) {
  // expects the record that was just added to the database
  products.post(request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}


function putProducts(request, response, next) {
  // expects the record that was just updated in the database
  products.put(request.params.id, request.body)
    .then(result => response.status(200).json(result))
    .catch(next);
}

function deleteProducts(request, response, next) {
  // Expects no return value (the resource should be gone)
  products.delete(request.params.id)
    .then(result => response.status(200).json(result))
    .catch(next);
}



module.exports = {
  server: app,
  start: (port) => app.listen(port, () => console.log(`Server up on port ${port}`)),
};
