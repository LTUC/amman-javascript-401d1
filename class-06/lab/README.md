# LAB: HTTP and REST

Get your hands dirty in using and properly documenting a ReST API

## Before you begin

Refer to *Getting Started-  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

## Requirements

### Build a working JSON Server

- Implement an API server suitable for a storefront, using json-server
  - Install `json-server` globally
  - Create a new repository called "simple-api"
  - Create a folder called `data` with a `db.json` file
  - Start json-server from within the `simple-api` folder and "watch" your database file
    - `json-server --watch=./data/db.json`
  - Data models should contain the following fields:
    - `categories`
      - `_id`, `name`, `display_name`, `description`
    - `products`
      - `_id`, `category`, `name`, `display_name`, `description`
  - Your api will automatically respond to the following endpoints:
    - `/categories`  GET, POST
    - `/categories/:id/` PUT, DELETE
    - `/products`  GET, POST
    - `/products/:id/` PUT, DELETE
  - Use `httpie` (command line) or Postman to POST some categories and products into your API so that you have some data in there.
  - Confirm that GET, PUT, and DELETE also work

- Connect a web server
  - Open this [React Application](https://w638oyk7o8.csb.app/)
  - In the form at the top of the page, enter the URL to your API Server
  - This server is configured to use the routes noted in the first lab requirement
  - If your lab is working, this app will show your API Data!

- Swagger Documentation
  - In your API, Create a folder called `docs`
  - Go to swagger.io and use the Inspector application to test your api
  - Write and publish swagger documentation with Swagger Inspector
    - It will publish it to "Swagger Hub"
    - Convert the YAML to JSON and then copy and paste swagger.json from the editor and add to your server project.
    - For submission, this file needs to be in your repository
    - Additionally, add the URL to the swagger hub page where you build the docs to your README

### Stretch Goal

- Alter json-server to produce proper standardized API output
  - Rather than just an array of objects on a get
    - Return an object with a `count: ##` property and a `results: []` array

      ```javascript
      {
        "count": 15,
        "results": [
          {},
          {}
        ]
      }
      ```

    - To do this, you'll need a server.js that requires in json-server and which overrides the renderer.
    - You will find instructions and examples on the [json-server github page](https://github.com/typicode/json-server)
  - Alter the swagger docs to reflect the new json format
  - Note: The www server is smart enough to recognie and use the new json format

## Assignment Submission Instructions

Refer to the the [Submitting Standard Node.js Lab Submission Instructions](../../../reference/submission-instructions/labs/node-apps.md) for the complete lab submission process and expectations

### For your README.md

- You are not required to deploy your JSON server today
- Do submit a PR with your db.json and another configuration or server changes that you did make (stretch goals)
- Add a link to the Swagger documentation you created at Swagger Hub
