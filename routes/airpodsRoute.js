const express = require('express')
const  airpodController=require('../controllers/airpodController');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.post('/airpod/create',airpodController.create);

router.get('/airpod/getall',airpodController.getAll);

router.get('/airpod/getall/:id?',airpodController.getById);


module.exports=router;