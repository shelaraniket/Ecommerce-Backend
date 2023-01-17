const mongoose = require('mongoose');

const MSchema = new mongoose.Schema({
    // userId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'USER'
    // },
    idnew: {
        type: Number,
        require:true
    },
    imageUrl: {
        type: String,
        require: true
    },
    imageUrl2: {
        type: String,
        require: true
    },
    imageUrl3: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    
        Processor :
        {
            type:String
        },
        Memory :
        {
            type:String
        },
        Display :
        {
            type:String
        },
        OS :
        {
            type:String
        },
        Warranty :
        {
            type:String
        }
    ,
    tags: {
        type: Array,
    },
        LaptopType:
        {
            type:String
        },
        Brand:
        {
            type:String
        },
        ModelSeries:
        {
            type:String
        },
        ModelNumber:
        {
            type:String
        },
        OSNameVersion:
        {
            type:String
        },
        OSType:
        {
            type:String
        },
        ProcessorBrand:
        {
            type:String
        },
        ScreenSizeinCM:
        {
            type:String
        },
        ScreenSizeinIN:
        {
            type:String
        },
        Type:
        {
            type:String
        },
        Resolution:
        {
            type:String
        },
        TouchType:
        {
            type:String
        },
        TypeOfRam:
        {
            type:String
        },
        TypeOfStorage:
        {
            type:String
        },
        HDD:
        {
            type:String
        },
        SSDCpacity:
        {
            type:String
        },
        GRAPHICModel:
        {
            type:String
        },
        GRAPHICType:
        {
            type:String
        },
        SOUND:
        {
            type:String
        },
        NumberOfUSBPorts:
        {
            type:String
        },
        HDMIType:
        {
            type:String
        },
        WiFiSupported:
        {
            type:String
        },
        WiFiSpecifications:
        {
            type:String
        },
        BluetoothSupported:
        {
            type:String
        },
        BluetoothSpecifications:
        {
            type:String
        },
        CameraType:
        {
            type:String
        },
        CameraFeatures:
        {
            type:String
        },
        StandardBatteryLife:
        {
            type:String
        },
        VoltageRating:
        {
            type:String
        },
    
})

const MacBookSchema = new mongoose.model('macbooks', MSchema);

module.exports = MacBookSchema;
