const project=require('../Models/ProjectCreation');


module.exports.home=function(req,res){
    project.find({}).then((p)=>{
        res.render('Home',{
            title:"Issue_Tracker",
            Projects: p
        });  
    });
     
}