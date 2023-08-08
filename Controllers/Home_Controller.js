// Importing the Database 
const project=require('../Models/ProjectCreation');

// Creating a Controller function for the request
// Home function gets the Required data from database and render the HTML page using EJS
module.exports.home=function(req,res){
    project.find({}).then((p)=>{
        res.render('Home',{
            title:"Issue_Tracker",
            Projects: p
        });  
    });
     
}