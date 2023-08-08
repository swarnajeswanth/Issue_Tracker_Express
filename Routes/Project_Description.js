const express=require('express');
const router=express.Router();

// Importing the Database from MongoDb
const project=require('../Models/ProjectCreation');
// Importing the Requried Functions from the Controllers folder
const {description,filter,filter1,del}=require('../Controllers/Project_Controller');

// Initializing the Get Methods for the Incoming Requests
router.get('/',description);
router.get('/filter/:id',filter);
router.get('/filter1/:id',filter1);
router.get('/delete',del);

// Exporting the Router 
module.exports=router;