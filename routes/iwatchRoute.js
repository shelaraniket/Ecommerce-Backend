const express = require('express')
const  iwatchController=require('../controllers/iwatchController');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.post('/iwatch/create',iwatchController.create);

router.get('/iwatch/getall',iwatchController.getAll);

router.get('/iwatch/getall/:id?',iwatchController.getById);


module.exports=router;