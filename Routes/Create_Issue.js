const express=require('express');

const router=express.Router();
// Importing the Controller Functions for Routes
const {get,creation}=require('../Controllers/Issue_Creation');

// Initializing the Get Route
router.get('/',get);
// Initializing the Post Route
router.post('/',creation);

// Exporting the Router
module.exports=router;