// Importing the Express module
const express = require('express');
const router=express.Router();

// Importing the Required Controller Functions
const creation_Page=require('../Controllers/Project_Controller').creation_Page;
const create_Project=require('../Controllers/Project_Controller').create_Project;
const modify_Project=require('../Controllers/Project_Controller').update;

// Initializing the Get & Post Methods for requests
router.post('/update',modify_Project);
router.get('/',creation_Page);

router.post('/',create_Project);



module.exports=router;