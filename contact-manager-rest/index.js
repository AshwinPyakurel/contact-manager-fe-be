import dotenv from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
const app = express();
// import userRoute from './';
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  res.json({message:"hello got"})    
});
// app.use('/',contactRoute);
app.use(function(req, res, next) {
    next({
      message : 'Not Found',
      status  : 404
    });
  });
  
  app.use(function(err, req, res, next) {
    res.status(err.status || 400).send({
      message : err.message || err,
      status  : err.status || 400,
    });
  });  
  mongoose.connect("mongodb://127.0.0.1:27017/cm_db")
  .then((result)=>console.log(result))
  .catch((err)=>console.log(err,"hello not working"));  
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Listening@ ${PORT}`);
})

// mongoose.connect(process.env.DB_HOST).then((result)=>{
//     app.listen(PORT,() =>{
//         console.log(`listening @ ${5000}`);
//     });
// }).catch((err)=>console.log(err));