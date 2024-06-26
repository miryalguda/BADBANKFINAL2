

const MongoClient = require('mongodb').MongoClient;

const dotenv = require('dotenv');
const  path = require("path")
dotenv.config({ path: './.env' });

const url         = process.env.MONGO_URI; 
const client = new MongoClient(url);



async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");
    } catch (err) {
        console.log(err.stack);
    }
    
}
run().catch(console.dir);

