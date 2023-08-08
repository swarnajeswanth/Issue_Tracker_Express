// Importing the database Module 
const projects=require('../Models/ProjectCreation');

// Get method is used for getting the Data from Database and rendering the page 
module.exports.get=function(req,res){
    const id=req.query.id;
    // Find method is used for interacting with the database and getting the data
    projects.find({_id:id}).then((p)=>{
        res.render('Create_issue',{
            Project:p,
            id:p._id
        });
    })
}


module.exports.creation=async function(req,res){
    // Initializing the Variables
  const id=req.query.id;
  let title=String(req.body.title);
  let description=String(req.body.description);
  let author=String(req.body.author);
  let labels=String(req.body.labels);
  title=title.trim();
  description=description.trim();
  author=author.trim();
  labels=labels.trim();

//   Updating the Database with the the variables initialized 
  await projects.findOneAndUpdate({_id:id},{$push:{bug:{title,description,labels,author}}},{new:true})
//   sending response to the Browser
  res.redirect(`/project_description/?id=${id}`);
}



