const express = require('express')
const mackbokController =require('../controllers/mackbokController');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/macbook/create',mackbokController.create);

router.get('/macbook/getall',mackbokController.getAll);

router.get('/macbook/getall/:id?',mackbokController.getById);


module.exports=router;