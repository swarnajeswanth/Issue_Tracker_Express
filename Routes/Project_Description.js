const express=require('express');
const router=express.Router();


router.get('/',function(req,res){
    res.render('Project_Description');
})

module.exports=router;