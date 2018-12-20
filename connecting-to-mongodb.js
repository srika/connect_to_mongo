//Providing a MongoDB
var mongoClient = require('mongodb').MongoClient;

//A URL at which MongoDB service is running
//var url = "mongodb://localhost:27017";
var url = "mongodb://myTester:xyz123@localhost:27017/ecommercedb";

//Make a connection to MongoDB Service
mongoClient.connect(url, { useNewUrlParser: true },function(err, db){
    if(err){
        throw err;
    }
    console.log('Successfully connected to db');
    db.close();
})