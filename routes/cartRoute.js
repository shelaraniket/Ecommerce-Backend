const express = require('express')
const  cartcontroller=require('../controllers/CartController');
const jwt = require('jsonwebtoken');
const router = express.Router();

const authMiddleWare = (req , res , next) => {
    const secretKey = process.env.SECRET_KEY;
    const token = req.header('Authorization') || '';
    // console.log("token : ",token)
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

router.post('/cart/create',authMiddleWare,cartcontroller.create);

router.get('/cart/getallmyitem',authMiddleWare,cartcontroller.getAllMyItem);

router.delete('/cart/destroy/:ID?',authMiddleWare,cartcontroller.destroy);


module.exports=router;