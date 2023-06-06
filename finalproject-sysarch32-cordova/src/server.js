// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies

app.post('/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Perform the database operation (e.g., insert the user data into a 'users' collection)
  db.collection('users').insertOne({ firstName, lastName, email, password })
    .then(() => {
      res.status(200).json({ message: 'User registered successfully' });
    })
    .catch((error) => {
      console.error('Error registering user:', error);
      res.status(500).json({ message: 'Error registering user' });
    });
});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
