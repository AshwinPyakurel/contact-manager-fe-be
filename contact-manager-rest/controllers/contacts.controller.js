import Contacts from "../models/contact.model.js";
import { validationResult } from "express-validator";
import { dataUri } from "../config/multer.config.js";
import {uploader,cloudinaryConfig} from '../config/cloudinary.config.js'
const addContact = (req,res)=>{
    if(req.file){
        const file = dataUri(req).content;

    }
    

    // const errors = validationResult(req);
    // if(!errors.isEmpty()){
    //     res.status(401).json({message:"Entered data is incorrect"});
    // }
    // const contact = new Contacts({
    //     name:req.body.name,
    //     photo:req.body.photo,
    //     phone:{
    //         mobileNumber: req.body.mobileNumber,
    //         workNumber:req.body.workNumber,
    //         homeNumber:req.body.homeNumber,
    //     },
    //     address: req.body.address,
    //     email:req.body.email,        
    // });
    // console.log(contact);
    // contact.save().then(()=>{
    //     return res.status(200).json({message:"Contact has been saved sucessfully"}); 
    // }).catch((err)=>{
    //     console.log(err);
    // })
}
const readContact = (req,res)=>{
    console.log('this is readContact');
}
const updateContact = (req,res)=>{
    console.log('this is updateContact');
}
const deleteContact = (req,res)=>{
    console.log('this is deleteContact');
}
const isFavourite = (req,res)=>{
    console.log('this is isFavourite');
}

export {addContact,readContact,updateContact,deleteContact,isFavourite};