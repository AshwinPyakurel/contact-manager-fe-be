import dotenv from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
const app = express();
import {AUTH_API_ROUTE} from './routes/auth.routes.js';
import {CONTACT_API_ROUTE} from './routes/contact.routes.js';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/',AUTH_API_ROUTE);
app.use('/',CONTACT_API_ROUTE);

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
  mongoose.connect(process.env.DB_HOST)
  .then((result)=>console.log('result'))
  .catch((err)=>console.log(err,"hello not working"));  
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Listening@ ${PORT}`);
})