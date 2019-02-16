

  const MongoClient = require("mongodb").MongoClient;
  require("dotenv").config();
  


module.exports = async function db(cb) { 

    const url = process.env.MONGOO_DB_SECRET_URL;
    const client = await MongoClient.connect(url);
    const dbName = "vzla_db";
    const db = await client.db(dbName);


    await query(db, function(results) { 
        return cb(results); 
    });
}

const query = function(db, callback) {

    const collection = db.collection('exchange');

    collection.find().sort({_id: -1}).limit(30).toArray(function(err, docs) {
      callback(docs);
    });
  }