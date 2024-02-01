const express = require('express');

const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;







const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cctjuyi.mongodb.net/?retryWrites=true&w=majority`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
 try { 
      const database = client.db('ForthDatabase')
      const userCollection = database.collection("Users")

       

 }

 finally {
    //await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req,res) => {
    res.send('Hello world')

})

app.listen(port, () =>{
    console.log(`Our Fourt Server Run On: ${port} `);
})