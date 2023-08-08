const project=require('../Models/ProjectCreation');


// Function used for rendering the Create_Project page 
module.exports.creation_Page=function(req,res){
    res.render('Create_Project',{
        title:'Create_Project'
    });
}

// Function used for Creating a Project and adding it into the Database 
module.exports.create_Project=function(req,res){
    var {name,description,author,completion}=req.body;
    // Getting the data from the req and creating a document in the Database
    project.create({
        name:name,
        description:description,
        author:author,
        completion:completion
    }).then(()=>{
        // Sending the Data back or rending 
        project.find({}).then((p)=>{
            res.status(200).render('Home',{
                title:"Issue_Tracker",
                Projects:p,
                
            });  
        })
        
    })
    
}

// Function for Editing the Project Fields
module.exports.edit=function(req,res){
    // Getting the data from the req
    let id =req.query.id;
    
    project.find({}).then((p)=>{
       
        for(i of p){
            if(i.id==id){
                res.render('Project_Edit',{
                    project:i
                })
            }
        }
        
    })
}

// Asyn function for updating a particular Document in the Database
module.exports.update=async function(req,res){
    // Getting the data from the req
    let id =req.query.id;
       await project.findByIdAndUpdate({_id:id},req.body,{new:true})
    res.redirect('/')
}

// Description function for rending the Project Description page with data from the Database 
module.exports.description=
    function(req,res){
        // Getting the Id from the Request 
        const id=req.query.id;
        // Find method is used for accessing the Database and getting the required data
        project.find({_id:id}).then((p)=>{
            // Sending the data or Rending 
            res.render('Project_Description',{
                Projects: p,
                bug:[p[0].bug],
                id:id,
        })
    })
}

// Function used for the Filtering the data 
module.exports.filter=function(req,res){
    // Getting the data from the req
    const id=req.path.split(':')[1];
    const {Author,Name}=req.query;

    // Conditional Rendering the Data using if clause
    project.find({_id:id}).then((p)=>{
        let result=[];
       let newbug=p.map((k)=>{ k.bug.map((b)=>{
            if(Author==b.author && Name==b.title){
                result.push(b);
            }
            
            else if(Author==b.author && Name=='blank'){
                result.push(b);
            }
            else if(Author=='blank' && Name==b.title){
                result.push(b);
            }
            else{
                return;
            }
        })
        return result;
    })
    
if(newbug[0].length==0){
    res.render('Project_Description',{
                Projects: p,
                bug:[p[0].bug],
                id:id,
        })
}
else{  res.render('Project_Description',{
            Projects: p,
            bug:newbug,
            id:id,
    })
}
})
}

// Function used for the Filtering the data 
module.exports.filter1=function(req,res){
    // Getting the data from the req
    const id=req.path.split(':')[1];
    const {title,description,labels}=req.query;
    
     // Conditional Rendering the Data using if clause
    project.find({_id:id}).then((p)=>{
        let result=[];
       let newbug=p.map((k)=>{ k.bug.map((b)=>{
            if(description==b.description && title==b.title && labels==b.labels){
                result.push(b);
            }
            else if(title==b.title && description=='' && labels==''){
               
                result.push(b);
            }
            else if(description==b.description && title=='' && labels==''){
                result.push(b);
            }
            else if(labels==b.labels && title=='' && description==''){
                result.push(b);
            }
            else if(description==b.description && title==b.title && labels==''){
                result.push(b);
            }
            else if(description==b.description && title=='' && labels==b.labels){
                result.push(b);
            }
            else if(description=='' && title==b.title && labels==b.labels){
                result.push(b);
            }
            else{
                return;
            }
        })
        return result;
    })

    // Rendering the page 
if(newbug[0]==0){
    res.render('Project_Description',{
                Projects: p,
                bug:[p[0].bug],
                id:id,
        })
}
else{  res.render('Project_Description',{
            Projects: p,
            bug:newbug,
            id:id,
    })
}
})
}

// Delete function used for Deleting a Project from the Database 
module.exports.del=function(req,res){
    const id=req.query.id;
    project.deleteOne({_id:id}).then(()=>{
        res.redirect('/');
    });
}