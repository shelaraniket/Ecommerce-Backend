const express = require('express')
const iphoneController =require('../controllers/iphoneController');
const jwt = require('jsonwebtoken');
const router = express.Router();


const authMiddleWare = (req , res , next) => {
    const secretKey = process.env.SECRET_KEY;
    const token = req.header('Authorization') || '';
    console.log("token : ",token)
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized access from backend' });
    }
    const decode = jwt.decode(token, secretKey);
    if (!decode) {
        return res.status(401).json({ message: 'Unauthorized access' });
    }
    req.user = decode;
    next();
}

router.post('/iphone/create',iphoneController.create);

router.get('/iphone/getall',iphoneController.getAll);

router.get('/iphone/getall/:id?',iphoneController.getById);


module.exports=router;