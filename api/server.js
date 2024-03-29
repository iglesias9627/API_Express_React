const express = require('express');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content- application/x-www
app.use(express.urlencoded({extended: true}));

const db = require('./models');
db.mongoose
  .connect(db.url)
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch(err => {
    console.log(`Cannot connect to the database! Error: ${err}`);
    process.exit();
  })

// simple route
app.get('/', (req,res) => {
    res.json({message:'Welcome to my application.'})
});

// We add the tutorials routes here
require("./routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});