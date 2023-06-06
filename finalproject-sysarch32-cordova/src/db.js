const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let db; 

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB');
    db = client.db(); // Access the default database
  }
});

