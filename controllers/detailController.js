
const Details = require('../model/detailsSchema');

const create = async (req , res , next) => {

    const data = {
        fullname : req.body.fullname,
        address : req.body.address,
        pincode:req.body.pincode,
        Phone:req.body.Phone,
        street:req.body.street,
        paymetmethod:req.body.paymetmethod,
        cardholdersname:req.body.cardholdersname,
        cardnumber:req.body.cardnumber,
        expiration:req.body.expiration,
        cvv:req.body.cvv,
        UpiId:req.body.UpiId,
        totalamount:req.body.totalamount,
        cartitems:req.body.cartitems,
        date:req.body.date,
        userDetails : req.user.id,
    }

    try {

        const details = await Details.create(data);
        res.status(201).json({ details , message : 'details saved Successfully'});
    } 
    catch (error) {
        next({ status: 500, message: error.message })
    }
};

const getAllDetails =async(req,res,next)=>{
    const id = req.user.id;
    try {
        const details = await Details.find({ userDetails: id }).populate('userDetails', '-email -password');
        res.json( details );
    } 
    catch (error) {
        next({ status : 404 , message : error.message})
    }
}



module.exports = { create , getAllDetails}