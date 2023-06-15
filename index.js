const express = require('express');
const path =require('path');
const port =8000;
const app = express();
const db= require('./Config/mongoose');
const home_Router=require('./Routes/Home_Route');

app.set('view engine','ejs');
app.set('views','./Views');

app.use(express.static(path.join(__dirname,'Assets')));

app.use(express.urlencoded({
    extended: false
 }));

 
app.use('/',home_Router);





app.listen(port, (err)=>{
    if(err){
        console.log(`Error While Creating a Server ${err}`);
    }
    console.log(`Server is created at port : ${port}`)
})