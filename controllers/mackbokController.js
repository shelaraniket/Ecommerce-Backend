const Macbook = require('../model/mackbookSchema')

const create =(req,res)=>{
    console.log(req.body);
    const laptop = new Macbook(req.body);
    laptop.save()
    .then(()=>{
        res.status(201).send(laptop);
    })
    .catch((e)=>{
        res.status(400).send(e);
    })
}

const getAll =(req,res)=>{
    const MacBooks = Macbook.find()
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
    Macbook.find({ idnew: id })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.json({ success: false, message: "Error occured" })
        })
}

module.exports = { create, getAll, getById }