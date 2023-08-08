// Importing the Mongoose Module
const mongoose=require('mongoose');

// Creating a Connection with Mongobd Server
mongoose.connect('mongodb://127.0.0.1/issueTracker');
var db=mongoose.connection;

// Validating the Connection and throwing the issue incase of an error

db.on('error',console.error.bind(console,'Error While connecting to database'));
db.once('open',function(){
    console.log('Connected to DB');
})

