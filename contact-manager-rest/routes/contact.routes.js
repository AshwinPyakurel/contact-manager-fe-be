import express from 'express';
import multer from 'multer';
import {addContact,readContact,updateContact,deleteContact,isFavourite} from '../controllers/contacts.controller.js';
import {authenticate} from '../middleware/auth.middleware.js';

const router = express.Router();
import { multerUploads } from '../config/multer.config.js';
const upload = multer({dest:'../uploads/'});


router.get('/contacts',readContact);
router.post('/contacts',multerUploads,addContact);
router.put('/contacts/:id',updateContact);
router.delete('/contacts/:id',deleteContact);
router.patch('/contacts/isFavourite/:id',isFavourite);

export{router as CONTACT_API_ROUTE};