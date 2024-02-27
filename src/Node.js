// Install required packages: npm install express pg-promise cors

const express = require('express');
const cors = require('cors');
const pgp = require('pg-promise')();

const app = express();
const port = 3000;

// Database configuration
const db = pgp({
  user: 'postgres',
  password: '7020',
  host: 'localhost',
  port: 5432,
  database: 'demo_database',
});

app.use(cors());
app.use(express.json());

// API endpoint to get customer information
app.get('/api/customers', async (req, res) => {
  try {
    const customers = await db.any('SELECT * FROM customers');
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// API endpoint to add a new customer
app.post('/api/customers', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    await db.none('INSERT INTO customers(name, email, phone) VALUES($1, $2, $3)', [name, email, phone]);
    res.status(201).send('Customer added successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Listen on port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
