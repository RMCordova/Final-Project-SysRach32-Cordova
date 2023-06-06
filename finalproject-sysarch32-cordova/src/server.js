const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

const uri = 'mongodb+srv://Shin:<password>@cluster0.nbn3yqo.mongodb.net/?retryWrites=true&w=majority'; // MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db('SysArch32FinalProject'); // Database name

    // Add schema validation for UserDetails collection
    db.createCollection('UserDetails', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['firstName', 'lastName', 'email', 'password'],
          properties: {
            firstName: {
              bsonType: 'string',
              description: 'First name must be a string'
            },
            lastName: {
              bsonType: 'string',
              description: 'Last name must be a string'
            },
            email: {
              bsonType: 'string',
              description: 'Email must be a string'
            },
            password: {
              bsonType: 'string',
              description: 'Password must be a string'
            }
          }
        }
      }
    });
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

connectToMongoDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

app.get('/test-connection', (req, res) => {
  if (db) {
    res.status(200).json({ message: 'Connected to MongoDB' });
  } else {
    res.status(500).json({ message: 'Not connected to MongoDB' });
  }
});

app.post('/sign-up', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Insert user data into the 'UserDetails' collection
    const result = await db.collection('UserDetails').insertOne({ firstName, lastName, email, password });

    if (result.insertedCount === 1) {
      console.log('User registered successfully:', result.insertedId);
      res.status(200).json({ message: 'User registered successfully' });
    } else {
      console.error('Error registering user');
      res.status(500).json({ message: 'Error registering user' });
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.post('/sign-in', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Check if the user exists in the database
      const user = await db.collection('UserDetails').findOne({ email });
  
      if (!user) {
        console.log('User not found');
        res.status(401).json({ message: 'Invalid credentials' });
        return;
      }
  
      // Check if the password matches
      if (user.password !== password) {
        console.log('Invalid password');
        res.status(401).json({ message: 'Invalid credentials' });
        return;
      }
  
      // Login successful
      console.log('Logged in successfully');
      res.status(200).json({ message: 'Logged in successfully' });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Error logging in' });
    }
  });
  