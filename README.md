# simple-api-crud

Rest API CRUD Express

## Features!

  - REST API
  - CRUD


## Installation

  requires [Node.js](https://nodejs.org/) v4+ to run.

  ```sh
  $ cd simple-api-crud
  $ npm install --save nodemon
  $ nodemon app.js
  ```

### Tech

  uses a number of open source projects to work properly:

  * [node.js] - evented I/O for the backend
  * [Express] - fast node.js network app framework
  * [Mongoose] - DB
  * [Postman] - simple access http and get result value


### Access CRUD

  | Route | HTTP | Description|
  | ------ | ------ | ------ |
  | /foods | GET | Get all the foods |
  | /foods/:id | GET | Get one the foods |
  | /foods | POST | Create a foods |
  | /foods/:id | DELETE | Delete a foods |
  | /foods/:id | PUT | Update a foods with new info |
  | ------ | ------ | ------ |
  | /restaurants | GET | Get all the restaurants |
  | /restaurants/:id | GET | Get one the restaurants |
  | /restaurants | POST | Create a restaurants |
  | /restaurants/:id | DELETE | Delete a restaurants |
  | /restaurants/:id | PUT | Update a restaurants with new info |
