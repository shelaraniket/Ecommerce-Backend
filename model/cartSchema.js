const mongoose = require('mongoose');

const cart = new mongoose.Schema({
    userDetails:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER'
    },
    model:
    {
        type: String,
        require: true
    },
    imageUrl: {
        type: String,
        require: true
    },
    color:
    {
        type: String,
        // require: true
    },
    price:
    {
        type: Number,
        require: true
    },
    quantity:
    {
        type: Number,
        // require: true
    },
    storage:
    {
        type: String,
    },
    productId:{
        type:String
    }
    
})

const CartSchema = new mongoose.model('carts', cart);

module.exports = CartSchema;
