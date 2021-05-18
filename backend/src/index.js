const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const config = require('../config')
const MongoClient = require('mongodb').MongoClient;
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())


// Connection URI
const url = config.dbURL;
// Create a new MongoClient
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db(config.dbName).command({ ping: 1 });
        let db = client.db(config.dbName)
        console.log("Connected successfully to database");

        require('./initialDataBase')(db);

        require('./routes')(app, db);
        app.listen(config.port, () => {
            console.log('We are live on ' + config.port);
        });
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

