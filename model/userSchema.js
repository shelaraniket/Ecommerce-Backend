const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        // required:true
    },
    state:{
        type:String,
        // required:true
    },
    gender:{
        type:String,
        // required:true
    },
    country:{
        type:String,
        // required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }
});
const User = mongoose.model('USER', userSchema);
module.exports = User;

