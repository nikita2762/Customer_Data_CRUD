const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'project_1',
  password: 'admin',
  port: 5432,
});

const getCustomers = (request, response) => {
  pool.query('SELECT * FROM customer ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getCustomerById = (request, response) => {
  const id = parseInt(request.params.id);
  // console.log(id);

  pool.query('SELECT * FROM customer WHERE id = $1', [id], (error, results) => {
    if (error) {
      console.log(error);
      throw error;
    }
    // console.log('no error ');
    response.status(200).json(results.rows);
  });
};

const createCustomer = (request, response) => {
  const { name, email, contact } = request.body;
  pool.query(
    'INSERT INTO customer (name, email, contact) VALUES ($1, $2, $3) RETURNING *',
    [name, email, contact],
    (error, results) => {
      if (error) {
        console.log('error while creating customer');
        console.log(error);
        throw error;
      }
      // response.status(201).send(`Customer added with ID: ${results.rows[0].id}`);
      response.status(201).json({status: 201, message: `Customer added with ID: ${results.rows[0].id}`})
    }
  );
};

const updateCustomer = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email, contact } = request.body;

  pool.query(
    'UPDATE customer SET name = $1, email = $2, contact = $3 WHERE id = $4',
    [name, email, contact, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      // response.status(200).send(`Customer modified with ID: ${id}`);
      response.status(200).json({status: 200, message: `Customer modified with ID: ${id}`})
    }
  );
};

const deleteCustomer = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM customer WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    // response.status(200).send(`Customer deleted with ID: ${id}`);
    response.status(200).json({status: 200, message: `Customer deleted with ID: ${id}`})
  });
};

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};