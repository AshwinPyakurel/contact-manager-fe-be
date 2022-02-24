import { Router } from "express";

Router.post('/login',(req,res)=>{
    res.json({message:"welcome to login"});
})

module.exports = Router;