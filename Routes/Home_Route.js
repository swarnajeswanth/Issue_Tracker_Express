const express = require('express');
const router= express.Router();

const create_Project=require('../Routes/Create_Project');
const project_Description=require('../Routes/Project_Description');

const home=require('../Controllers/Home_Controller').home;

router.use('/project_description',project_Description);
router.use('/create-project',create_Project);

router.get('/',home)



module.exports=router;