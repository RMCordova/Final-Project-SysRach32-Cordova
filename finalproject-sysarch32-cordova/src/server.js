const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

const connectToMongoDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db('SysArch32'); // Database name

    // Add schema validation for PersonalDetails collection
    db.createCollection('PersonalDetails', {
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

connectToMongoDB();


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3000;

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
    // Insert user data into the 'PersonalDetails' collection
    const result = await db.collection('PersonalDetails').insertOne({ firstName, lastName, email, password });

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
