const AirPod = require('../model/airpodSchema')

const create =(req,res)=>{
    console.log(req.body);
    const AirPods = new AirPod(req.body);
    AirPods.save()
    .then(()=>{
        res.status(201).send(AirPods);
    })
    .catch((e)=>{
        res.status(400).send(e);
    })
}

const getAll =(req,res)=>{
    const Airpods = AirPod.find()
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
    AirPod.find({ idnew: id })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.json({ success: false, message: "Error occured" })
        })
}

module.exports = { create, getAll, getById }