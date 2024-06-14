const express = require('express');
const bodyParser =require('body-parser');
const mysql = require('mysql2');

const app = express();
const cors = require('cors');
// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'easybills',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('MySQL connected');
});
app.get('/', (req, res) => {
  res.send('Hello, World!');
  console.log("HEllO")
})
/*
app.get('/easybills/users', (req, res) => {
  const sql=('SELECT * FROM users',(err,results)=>{
    if(err){
      console.log(err);
    }else{
      console.log(results);
      res.send(results);
    }
  })
})

// Define a route handler to handle POST requests for inserting data
app.post('/easybills/users', (req, res) => {
  console.log(req.body);
  // Extract email and password from the request body
  const { email, password } = req.body;
  console.log(email, password);
  // Insert data into the users table
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error inserting data into users table:', err);
      res.status(500).send('Error inserting data into users table');
      return;
    }
    console.log('Data inserted into users table:', result);
    res.status(201).send('Data inserted into users table');
  });
});*/
// Define a route handler to handle POST requests for user login
app.post('/easybills/login', (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error('Error querying user:', err);
      res.status(500).send('Error querying user');
      return;
    }
    if (results.length > 0) {
      // User found, send success response
      res.status(200).send('Login successful');
    } else {
      // User not found or credentials incorrect, send error response
      res.status(401).send('Invalid email or password');
    }
  });
});

app.post('/easybills/users', (req, res) => {
  const { email, password } = req.body;
  const sql = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error('Error inserting data into users table:', err);
      res.status(500).send('Error inserting data into users table');
      return;
    }
    console.log('Data inserted into users table:', result);
    res.status(201).send('Data inserted into users table');
  });
});

app.get('/easybills/users', (req, res) => {
  const sql = 'SELECT * FROM users'; // Correct SQL query syntax
  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error retrieving users');
    } else {
      console.log(results);
      res.json(results); // Send users data as JSON response
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});