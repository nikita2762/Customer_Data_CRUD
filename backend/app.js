const express = require('express');
const Sequelize = require("sequelize");
const app = express();

const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const port = 3000;
const cors = require("cors");

const db = require('./queries');

var corsOptions = {
    origin: "http://localhost:4200"
  };
  
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' });
  });
  
  app.get('/customers', db.getCustomers);
  app.get('/customer/:id', db.getCustomerById);
  app.post('/customer', db.createCustomer);
  app.put('/customer/:id', db.updateCustomer);
  app.delete('/customer/:id', db.deleteCustomer);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
