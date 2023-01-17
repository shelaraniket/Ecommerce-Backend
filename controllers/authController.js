const User = require('../model/userSchema');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')

const register =async(req,res,next)=>{
    const { name,email,phone,address,city,country,state,pincode,password,cpassword,gender,dob }=req.body;
    // console.log("its working")
    if(!name || !email || !phone || !city || !country || !state || !pincode || !address || !password || !cpassword || !gender || !dob){
        return res.status(401).json({ error:"All fields are required" });
    }
    let emailExists = await User.findOne({ email:email });
    if (emailExists) {
        return res.status(422).send('Email already Exists.');
    }else if(password != cpassword){
        return res.status(422).send('Password is not matched.');
    }
    const encPassword = bcryptjs.hashSync(password , 15);
    const encCPassword = bcryptjs.hashSync(cpassword , 15);

    try{
        const user =await User.create({ name,email,phone,address,city,country,state,pincode,
            gender,dob,password:encPassword,cpassword :encCPassword});
    // const user =await User.create({ name:name,email:email,phone:phone,address:address,password:password,cpassword:cpassword });
        console.log(user)
        res.status(201).send({ message: 'User Registered' ,user });
    }
    catch (error) {
        next({ status: 404, message: error})
    }
}

const login = async(req,res,next)=>{
    const { email, password } = req.body;
    try{
        if(!email || !password){
            return res.status(401).json({error : "please filled email and password"})
        }
        const user = await User.findOne({ email:email });
        // console.log(user)
        if (!user) {
            return res.status(404).json({ message: "This Email Doesn't Exist" });
        }
        const dbPassword = user.password;
        // console.log(dbPassword);
        const isSamePassword = await bcryptjs.compare(password , dbPassword);
        if(isSamePassword){
            const JsonPayLoad = { id : user._id , name : user.name, email : user.email };
            const token = jwt.sign(JsonPayLoad, process.env.SECRET_KEY ,{ expiresIn : '3d'});
            res.json({token ,message : 'Logged In Successfully' });
        }
        else{
            // next({ status: 404, message: 'Password is Incorrect' })
            res.status(404).json({ status: 404, message: 'Password is Incorrect from backend' });
            // res.status(404).json({message : 'Password is Incorrect from backend'})
        }
    }
    catch(error){
        console.log(error)
    }
}

module.exports = { register , login }