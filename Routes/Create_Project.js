const express = require('express');
const router=express.Router();

const creation_Page=require('../Controllers/Project_Creation_Controller').creation_Page;
const create_Project=require('../Controllers/Project_Creation_Controller').create_Project;

router.get('/',creation_Page);

router.post('/',create_Project);


module.exports=router;