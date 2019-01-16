const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'tienda';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
 
  queryAltaProductos(db, function() {
    
  })
  querySaludos(db, function() {
    client.close();
  });
});

const querySaludos = function(db, callback) {
  const collection = db.collection('saludos');
  collection.find({}).toArray(function(err, saludos) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(saludos)
    callback(saludos);
  });
}

const queryAltaProductos = function(db, callback) {
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany(products, function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });  
});