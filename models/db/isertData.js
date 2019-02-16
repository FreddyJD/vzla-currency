const MongoClient = require("mongodb").MongoClient;
const data = require("../currencyData");
require("dotenv").config();


// Todo : make the db connect function a ORM 
module.exports = async function Connect() {

  const url = process.env.MONGOO_DB_SECRET_URL;
  const client = await MongoClient.connect(url);
  const dbName = "vzla_db";

  console.log(
    `✅ Everything looks fine over here buddy! DB connected correctly`
  );
  const db = await client.db(dbName);

  await insertData(db);

  client.close();
}

async function insertData(db) {
    const data_all = await data();
    const date = Date.now();
  
    // Todo = Loop over the object to get the avg
    let avg = data_all.DolarToday + data_all.DolarCucuta + data_all.DolarDicom;
    avg = avg / 3;
  
    await db.collection("exchange").insertOne({
      date: date,
      avg: avg,
      exchangers: data_all
    });
  }