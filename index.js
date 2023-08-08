// Importing the Express module 
const express = require('express');
// Requiring the Path Module
const path =require('path');
const port =8000;
// Executing the Server function
const app = express();

// Requiring the Database configuration file 
const db= require('./Config/mongoose');

// Importing the Home.js file
const home_Router=require('./Routes/Home_Route');

// Importing the Express Module
const expressEjsLayouts = require('express-ejs-layouts');

// Setting up the Static folder for Styles & Javascript
app.use(express.static(path.join(__dirname,'Assets')));

// Setting up the EJS View Engine and folder path 
app.set('view engine','ejs');
app.set('views','./Views');

// Used to decode the Form data
app.use(express.urlencoded({
    extended: false
 }));

//  Informing Express server for where to look for '/' path
app.use('/',home_Router);




// Starting the Express Nodejs Server
app.listen(port, (err)=>{
    if(err){
        console.log(`Error While Creating a Server ${err}`);
    }
    console.log(`Server is created at port : ${port}`)
})