
// Importing the Router Module
const express=require('express');
const router= express.Router();
// Importing the Requried functions from the Controller folder
const edit=require('../Controllers/Project_Controller').edit;

// Initializing the Get Method for Incoming request
router.get('/',edit);

// Exporting the Router
module.exports=router;
