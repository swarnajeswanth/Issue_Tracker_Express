// Importing the Express Module for Accessing the route function
const express = require('express');
const router= express.Router();

// Importing the Project Database 
const Project=require('../Routes/Project');

// Importing the Required Files for the routes path
const project_Description=require('../Routes/Project_Description');
const create_Issue= require('../Routes/Create_Issue');
const Project_Edit=require('../Routes/Project_Edit');
const home=require('../Controllers/Home_Controller').home;

// Informing Express server for where to look for these Routes
router.use('/project-edit',Project_Edit);
router.use('/create-issue',create_Issue);
router.use('/project_description',project_Description);
router.use('/create-project',Project);

router.get('/',home)


// Exporting the Router 
module.exports=router;