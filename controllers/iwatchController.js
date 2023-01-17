const Iwatch = require('../model/iwatchSchema');

const create =(req,res)=>{
    console.log(req.body);
    const iwatch = new Iwatch(req.body);
    
    iwatch.save()
    .then(()=>{
        res.status(201).send(iwatch);
    })
    .catch((e)=>{
        res.status(400).send(e);
    })
    // res.send("Hello dear!");
}

const getAll =(req,res)=>{
    const iwatches = Iwatch.find()
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
    Iwatch.find({ idnew: id })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.json({ success: false, message: "Error occured" })
        })
}

module.exports = { create, getAll, getById }