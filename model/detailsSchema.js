const mongoose = require('mongoose');

const details = new mongoose.Schema({
    userDetails:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER'
    },
    fullname:
    {
        type: String,
        // require: true
    },
    address:
    {
        type: String,
        // require: true
    }, 
    pincode:
    {
        type: String,
        // require: true
    },
    Phone:
    {
        type: String,
        // require: true
    },
    street:
    {
        type: String,
        // require: true
    },
    paymetmethod:
    {
        type: String,
    },
        cardholdersname :
        {
            type:String
        },
        cardnumber :
        {
            type:String
        },
        expiration :
        {
            type:String
        },
        cvv :
        {
            type:String
        },
    UpiId:{
        type:String
    },
    totalamount:{
        type:String
    },
    cartitems:{
        type:Array
    },
    date:{
        type:String
    }
})

const DeatilsSchema = new mongoose.model('detail',details );

module.exports = DeatilsSchema;