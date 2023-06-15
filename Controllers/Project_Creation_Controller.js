const project=require('../Models/ProjectCreation');


module.exports.creation_Page=function(req,res){
    res.render('Create_Project',{
        title:'Create_Project'
    });
}

module.exports.create_Project=function(req,res){
    var {name,description,author,completion}=req.body;
    project.create({
        name:name,
        description:description,
        author:author,
        completion:completion
    }).then(()=>{
        project.find({}).then((p)=>{
            res.status(200).render('Home',{
                title:"Issue_Tracker",
                Projects:p
            });  
        })
        
    })
    
}