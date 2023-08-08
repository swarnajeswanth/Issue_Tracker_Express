// Requring the Mongoose module
const mongoose=require('mongoose');

// Creating the Database schema using Mongoose 
const projectCreation=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        requrire:true
    },
    author:{
        type:String,
        require:true
    },
    completion:{
        type:String,
        require:true
    },
    bug:[{
        title:{
            type:String
        },
        description:{
            type:String
        },
        labels:{
            type:String
        },
        author:{
            type:String
        }
    }],
});

// Creating the Database Model using Schema 
const Project= mongoose.model('Projects',projectCreation);

// Exporting the Database Model
module.exports=Project;