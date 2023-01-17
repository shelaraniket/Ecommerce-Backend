const mongoose = require('mongoose');

const ISchema = new mongoose.Schema({

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
    storage :{
        type:Number,
        require:true
    },
    keyFeature: {
        type: Array,
        // require: true,
        Display :
        {
            type:String
        },
        Memory :
        {
            type:String
        },
        Processor :
        {
            type:String
        },
        Camera :
        {
            type:String
        },
        Battery :
        {
            type:String
        },
        Security :
        {
            type:String
        }
    },
    tags: {
        type: Array,
    },
    // quantity:{
    //     type:Number,
    //     require: true
    // },
    description:{
        type:Array,
        MobileType:
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
        ProcessorBrand:
        {
            type:String
        },
        ProcessorName:
        {
            type:String
        },
        // CPUSpecs:
        // {
        //     type:String
        // },
        // GPU:
        // {
        //     type:String
        // },
        ScreenSizeinCM:
        {
            type:String
        },
        // ScreenSizeinInches:
        // {
        //     type:String
        // },
        Type:
        {
            type:String
        },
        PixelDensity:
        {
            type:String
        },
        TouchType:
        {
            type:String
        },
        Brightness:
        {
            type:String
        },
        AudioTechnology:
        {
            type:String
        },
        PrimarySIMType:
        {
            type:String
        },
        DualSIMMode:
        {
            type:String
        },
        // GBandsSupported:
        // {
        //     type:String
        // },
        WiFiSpecifications:
        {
            type:String
        },
        WiFiFeatures:
        {
            type:String
        },
        BluetoothSpecifications:
        {
            type:String
        },
        RearCamera1:
        {
            type:String
        },
        RearCamera2:
        {
            type:String
        },
        SoftwareLocks:
        {
            type:String
        },
        BiometricLocks:
        {
            type:String
        },
    }
})

const IphoneSchema = new mongoose.model('iphones', ISchema);

module.exports = IphoneSchema;
