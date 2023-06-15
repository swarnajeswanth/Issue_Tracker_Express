const mongoose=require('mongoose');

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
    }
});

const Project= mongoose.model('Projects',projectCreation);

module.exports=Project;