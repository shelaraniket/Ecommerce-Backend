const Cart = require('../model/cartSchema');

// const create =(req,res)=>{
//     console.log(req.body);
//     const carts = new Cart(req.body);
    
//     carts.save()
//     .then(()=>{
//         res.status(201).send(carts);
//     })
//     .catch((e)=>{
//         res.status(400).send(e);
//     })
//     // res.send("Hello dear!");
// }

const create = async (req , res , next) => {
   
    const data = {
        model : req.body.model,
        imageUrl : req.body.imageUrl,
        color:req.body.color,
        price:req.body.price,
        quantity:req.body.quantity,
        storage:req.body.storage,
        productId:req.body.productId,
        userDetails : req.user.id,
    }

    try {

        const cart = await Cart.create(data);
        res.status(201).json({ cart , message : 'item Created Successfully'});
    } 
    catch (error) {
        next({ status: 500, message: error.message })
    }
};


const getAllMyItem =async(req,res,next)=>{
    const id = req.user.id;
    try {
        const carts = await Cart.find({ userDetails: id }).populate('userDetails', '-email -password');
        res.json( carts );
    } 
    catch (error) {
        next({ status : 404 , message : error.message})
    }
}


const destroy = async (req , res , next) => {
    const id = req.params.ID;
    if (!id) {
        return next({ status: 404, message: 'ID Is Missing' })
    }

    try {
        const cart = await Cart.findByIdAndDelete(id)
        res.json({message : 'item Deleted'});
    } 
    catch (error) {
        next({ status: 500, message: error.message })
    }
};

module.exports = { create, getAllMyItem,destroy }

