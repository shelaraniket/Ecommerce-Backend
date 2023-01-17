const Iphones = require('../model/iphoneSchema');

const create =(req,res)=>{
    console.log(req.body);
    const user = new Iphones(req.body);
    
    user.save()
    .then(()=>{
        res.status(201).send(user);
    })
    .catch((e)=>{
        res.status(400).send(e);
    })
    // res.send("Hello dear!");
}

const getAll =(req,res)=>{
    const IPHONE = Iphones.find()
    .then((data)=>{
        res.status(200).json(data);
        console.log(data);
    })
    .catch((e)=>{
        res.status(400).json({ success: false, message: "Error occured" })
    })
}

const getById =(req, res) => {
    const id = req.params.id;
    Iphones.find({ idnew: id })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.json({ success: false, message: "Error occured" })
        })
}

module.exports = { create, getAll, getById }