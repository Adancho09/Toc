const express = require('express');
const router = express.Router();
 

const Task  =require('../model/task');
router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/post',(req,res)=>{
    res.render('post')
})
router.get('/about',(req,res)=>{
    res.render('about')
})
router.get('/contact',(req,res)=>{
    res.render('contact')
})
router.post('/add',async (req,res)=>{
  console.log(req.body);

    res.render('index');
})
module.exports = router;